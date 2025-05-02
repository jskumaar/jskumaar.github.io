---
layout: page
title: Pedestrian Behavior Modeling
description: Developing explainable models of long-term urban pedestrian behavior
img: /assets/img/ped_typical_behavior.png
importance: 3
category: work
related_publications: true
---

This research area focuses on developing models to accurately predict the future behavior (actions and trajectories) of pedestrians, which is a major operational challenge for Automated Vehicles (AVs) in urban environments. Pedestrian behavior is complex due to its inherent uncertainty and multimodal nature. 

I developed explainable pedestrian behavior models based on hybrid automata theory to model and predict (long-term, 5-10 seconds) their crossing behavior at intersections. The models account for pedestrian decision-making points, such as deciding whether to cross the street or waiting for a suitable gap. Unlike some prior work that assumed all pedestrians intended to cross, this work separately models a pedestrian's intent to cross, leading to less conservative predictions. The model predicts both high-level actions (approaching, waiting, crossing, walking away) and low-level continuous motion evolution. The MHP model was validated on both real-world and virtual datasets involving interactions with human-driven and automated vehicles. The resulting probabilistic predictions from these models can be utilized for AV motion planning to help the AV safely navigate around pedestrians and avoid collisions.


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

The resulting automaton model is more likely to predict the ground truth trajectory compared to two baseline models - a baseline hybrid automaton model and a constant velocity model. The MHP model is applicable to a wide variety of urban scenarios including midblock crosswalks, intersections, one-way, and two-way streets, and the probabilistic predictions from the model can be utilized for AV motion planning.

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
