---
layout: page
title: Real-Time Detection of Unexpected AI Behavior from Human Emotional Cues
description: A multimodal pipeline using OpenFace 2.0, OpenSMILE, and XGBoost (79.4% TPR, ~2.7s latency) to detect user emotional responses to unexpected in-vehicle system behaviors, with autonomous verbal mitigation.
img: /assets/img/driver_cues_thumbnail.png
importance: 4
category: work
related_publications: true
github: https://github.com/Augmented-Design-Capability-Studio/in-car-passenger-monitoring
---

Autonomous systems inevitably make mistakes or behave unexpectedly. When this happens, the system needs to detect the user's negative emotional response and take corrective action — but most systems lack the perceptual capability to do this. This project builds a full closed-loop pipeline: multimodal data collection and feature extraction, real-time binary classification of emotional responses, and autonomous deployment of verbal mitigation strategies. The work is grounded in the **ARISE** dataset (Autonomous vehicle Reactions to In-vehicle System Events), a purpose-built labeled dataset of human emotional responses to unexpected in-vehicle system behaviors.

#### Dataset: ARISE (60 Participants)

ARISE was collected from **60 participants** in a driving simulator study across two rounds. Each participant experienced scenarios designed to trigger three target emotional states:

- **Surprise**: system does something ambiguous and unexpected (e.g., plays a wrong song without warning)
- **Confusion**: system behavior is unclear or contradictory (e.g., ignores a repeated voice command)
- **Frustration**: system fails repeatedly, accumulating over multiple attempts (e.g., keeps playing incorrect music)

Sensors captured multimodal behavioral signals throughout:
- **Video** (30 fps): two Luxonis cameras at the steering wheel and rear-mirror positions
- **Audio**: microphone capturing speech prosody and ambient sound during interactions
- **Physiological**: Garmin fitness tracker for continuous heart rate recording
- **System events**: timestamped logs of all system behaviors and voice commands

All emotional response intervals were manually labeled using an internal annotation tool, yielding binary labels (response / no response) aligned to video timestamps {% cite ngo2025beyondReactions %}.

<div class="row">
    <div class="col-md-8 col-sm-10 mt-3 mx-auto">
        {% include figure.liquid loading="eager" path="/assets/img/expectations_mismatch_detection.png" title="Detection and mitigation pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <p align="justify">
        The closed-loop pipeline: multimodal inputs (video, audio, system events) are processed through OpenFace 2.0 and OpenSMILE feature extraction, classified in real time by an XGBoost model trained on ARISE, and used to autonomously trigger verbal mitigation strategies when an emotional response is detected.
    </p>
</div>

#### Detection Pipeline

**Feature Extraction.** Raw video is processed through **OpenFace 2.0** to extract 17 facial action unit (AU) intensities per frame, capturing facial muscle movements associated with each emotional state (e.g., AU1/AU2/AU5 for surprise, AU4/AU7 for confusion, AU23/AU24 for frustration). Raw audio is processed through **OpenSMILE** to extract Mel-Frequency Cepstral Coefficient (MFCC) features, capturing prosodic and vocal tract changes that accompany emotional responses. Features are aggregated into **0.5-second windows**.

**Classification.** A binary **XGBoost classifier** is trained on the ARISE feature set (80/20 train-test split with data augmentation) to predict whether any emotional response is occurring in a given window. The binary framing — response vs. no response — is used for real-time deployment, making the detector agnostic to which specific emotion is occurring. This is the appropriate formulation for a mitigation system, where the priority is detecting any expectation mismatch, not labeling the emotion precisely.

#### Real-Time Performance

The detector produces a classification output every **0.5 seconds** during live system operation, giving multiple detection opportunities within a single response event. Performance from live deployment (Study 2, N=30 participants) {% cite ngo2026apology %}:

| Emotional State | True Positive Rate | Mean Detection Latency |
|---|---|---|
| Overall | **79.44%** | — |
| Surprise | — | **2.69 s** |
| Confusion | — | **2.93 s** |
| Frustration | — | **17.66 s** |

Surprise and confusion have early-onset facial responses, enabling sub-3-second detection. Frustration requires sustained repeated failures to develop, explaining the longer detection window. The multi-window architecture deliberately trades per-window precision for event-level coverage — missing a reaction is costlier than a brief detection delay for a mitigation system.

#### Verbal Mitigation Study

The live detector was deployed to autonomously trigger **acknowledgment and apology** as mitigation strategies upon detection. Comparing 30 participants with autonomous mitigation (Study 2) against 30 from the baseline data collection (Study 1, no mitigation):

- Acknowledgment and apology alone are **not sufficient** to meaningfully reduce facial action unit activation or self-reported frustration over repeated encounters
- A **novelty effect** was observed: mitigation reduced AU activation briefly in early trials, but this effect disappeared in later trials while self-reported frustration continued to rise — users' faces adapted, but their conscious frustration did not
- Qualitative interviews revealed that users interpret apology as a signal that **corrective action** will follow; when no correction arrives, dissatisfaction compounds
- The majority of participants preferred mitigation strategies that include **self-correction, explanation, or cancellation** rather than acknowledgment alone

These findings motivate the next stage of this research: temporal models (LSTM / Transformer architectures) for multimodal fusion over longer time horizons, and richer mitigation strategies that pair acknowledgment with substantive corrective action {% cite ngo2026apology %}.

#### Transferable Engineering

This detection pipeline is applicable to any in-cabin sensing or HMI system requiring real-time user emotional state inference — ADAS, in-vehicle voice assistants, social robots, and collaborative AI systems. The ARISE dataset provides a benchmark for future emotional response detection models in automotive and related high-trust contexts.