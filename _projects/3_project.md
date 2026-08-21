---
layout: page
title: Participation detection and Robot Mediation for Inclusive Child Group Interactions
description: Real-time sensing and robot strategies to support equitable participation among mixed-ability children in group interactions (WIP).
img: /assets/img/inclusive_robot_mediation.png
importance: 9
category: work
related_publications: true
github: https://github.com/jskumaar/group_participation_detection
---

Children with mixed abilities, such as those with visual or auditory impairments, often face challenges in fully participating in group interactions. This project, a collaboration between Carnegie Mellon University (USA) and Universidade de Lisboa (Portugal), seeks to address this issue by developing real-time multimodal group participation metrics and using these metrics to guide socially assistive robot behaviors that foster inclusion and equity in group dynamics.

Using synchronized cameras and microphones, we extract visual and auditory cues like gaze direction, head nods, speech turns, and interruptions. These are processed in real time using tools such as OpenFace, MediaPipe, etc., to generate composite metrics of group engagement.

These real-time metrics are used to inform different robot mediation strategies to promote equitable participation. The outcomes of this research are expected to support more inclusive educational, and social environments through intelligent, context-aware robotic systems. A related session-aware, dataset-agnostic engagement estimation architecture developed as part of this line of work was benchmarked in the ACM MultiMediate Grand Challenge {% cite enock2026engagement %}.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="/assets/img/inclusive_robot_mediation.jpeg" title="Inclusive group interaction with robot mediator" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Illustration of a robot facilitating balanced participation among children using real-time sensing of gaze, speech, and nonverbal cues (image made using Sora).
</div>

**Code:** [jskumaar/group_participation_detection](https://github.com/jskumaar/group_participation_detection) (real-time participation metrics) &nbsp;·&nbsp; [Naveen-Enock/multimediate](https://github.com/Naveen-Enock/multimediate) (MultiMediate engagement estimation architecture)
