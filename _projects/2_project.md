---
layout: page
title: Automatic Detection of Unexpected AI Behavior from Human Cues
description: Evaluating the detection of unexpected AI behavior in autonomous vehicles by analyzing subtle human emotional cues
img: /assets/img/driver_cues_thumbnail.png
importance: 2
category: work
related_publications: true
---

AI-powered intelligent systems such as those in automated vehicles can potentially make mistakes or act in ways that violate user expectations. These “expectation mismatches” can range from harmless anomalies to serious safety concerns. This research aims to develop a robust framework for automatically detecting unexpected AI behavior through subtle human emotional and behavioral cues, with the goal of supporting trust-aware, user-sensitive AI adaptation.

The approach involves collecting and analyzing user behavioral responses to unexpected events in a driving simulator. The study exposes users to stimuli designed to induce surprise, confusion, and frustration, emotional responses considered primary triggers for reacting to unexpected system behaviors. A validated multi-modal multi-camera dataset is collected, including video, audio, and heart rate data, specifically for subtle human emotional responses and reactions in a vehicle environment. Detecting negative emotional responses, even when subtle or from non-critical behaviors, is seen as a strong signal for refining machine learning models and preventing erosion of user confidence and trust.

The study found that users perceive and react differently to unexpected behaviors from fully autonomous vehicles, with distinguishable emotional states such as surprise, confusion, and frustration. Surprise was typically brief and triggered by ambiguous events, while confusion involved unclear system behavior, and frustration arose from repeated or unresolved goal interference {% cite ngo2025beyondReactions %}. 

Facial expression analysis using OpenFace revealed statistically significant patterns, such as changes in blinking, lip tension, and chin movement, that differentiated between these emotional states. These results demonstrate that computer vision can detect nuanced emotional cues, enabling AI systems to infer when users experience an expectation mismatch and respond appropriately. This suggests a promising direction for building emotionally-aware, adaptive AI systems that maintain user trust and engagement in autonomous settings.


<div class="row">
    <div class="col-md-8 col-sm-10 mt-3 mx-auto">
        {% include figure.liquid loading="eager" path="/assets/img/expectations_mismatch_detection.png" title="Enhancing AI Trust through Emotional Cues" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <p align="justify">
        This figure illustrates a closed-loop framework for improving trust using user emotional responses.
    </p>
</div>

Building on these findings, we are developing a real-time event detection system that continuously monitors human behavioral signals such as facial expressions, audio prosody, and physiological indicators, to identify moments when users perceive AI behavior as unexpected. To capture the nuanced and temporally extended nature of human responses, we are exploring temporal models, including RNN-based architectures and Transformer models, that can fuse multimodal inputs and detect subtle shifts in user state over time. This cross-modal detector will enable AI systems—particularly in safety-critical or high-trust domains—to adapt their explanations, interventions, or behaviors dynamically, based on the user’s inferred awareness and emotional context {% cite ngo2025anticipating %}.

This line of research advances human-centered AI by improving not only how systems explain themselves, but also when and why they choose to explain, anchored in real-time understanding of user mental and emotional states.
