---
layout: page
title: Pedestrian Modeling
description: Developing hybrid-automaton models of long-term urban pedestrian behavior
img: /assets/img/ped_typical_behavior.png
importance: 1
category: work
related_publications: true
---

For automated vehicles (AVs) to navigate safely, they must be able to anticipate and predict the behavior of pedestrians. This is particularly critical in urban driving environments where risks of collisions are high. However, a major challenge is that pedestrian behavior is inherently multimodal in nature, i.e., pedestrians can plausibly take multiple paths. This is because, in large part, pedestrian behaviors are driven by unique intentions and decisions made by each pedestrian walking along a particular sidewalk or
crosswalk. As described in this paper, we developed a hybrid automaton model of multimodal pedestrian behavior called Multimodal Hybrid Pedestrian (MHP). We account for multimodal pedestrian behavior by identifying pedestrian decision-making points and developing decision-making models to predict pedestrian behaviors in a probabilistic hybrid automaton framework. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/ped_typical_behavior.png" title="Typical pedestrian behavior" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/ped_MHP_model.png" title="Multimodal Hybrid Pedestrian (MHP) model" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, is a typical pedestrian crossing scenario at an unsignalized crosswalk. Right, shows the hybrid automaton model of a pedestrian.
</div>

The resulting automaton model is more likely to predict the ground truth trajectory compared to two baseline models - a baseline hybrid automaton model and a
constant velocity model. The MHP model is applicable to a wide variety of urban scenarios - midblocks, intersections, one-way, and two-way streets, etc., and the probabilistic predictions from the model can be utilized for AV motion planning.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/MHP_FRS.png" title="example image" class="Illustration of multimodal pedestrian behavior" %}
    </div>
</div>
<div class="caption">
    <p align="justify">
      e <sup>1</sup><sub>p</sub>,  e <sup>2</sup><sub>p</sub>, and  e <sup>3</sup><sub>p</sub> are prediction envelopes at prediction time step  t <sub>p</sub>.  e <sup>1</sup><sub>p</sub> is the prediction envelope of the constant velocity model and  e <sup>2</sup><sub>p</sub> and  e <sup>3</sup><sub>p</sub> are the prediction envelopes corresponding to two possible future behaviors—waiting by the crosswalk and crossing—identified by the MHP model. FRSP is the forward reachable set at t <sub>p</sub> assuming the pedestrian could have walked in any direction with a maximum speed of 2.5 m/s. The green line indicates observed ground truth trajectory up to time  and the solid orange line indicates the ground truth trajectory after t <sub>p</sub> . The constant velocity predicts envelope  e <sup>1</sup><sub>p</sub> based on the initial heading of the pedestrian. However, the pedestrian turns to cross at the crosswalk, which is captured by the prediction envelope  e <sup>3</sup><sub>p</sub> of the MHP model.
    </p>
</div>
