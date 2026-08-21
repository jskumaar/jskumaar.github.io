---
layout: page
title: Pedestrian Behavior Modeling for Autonomous Vehicles
description: Explainable hybrid automaton models that predict long-horizon pedestrian crossing behavior, feeding probabilistic forecasts into AV motion planners for safe urban navigation.
img: /assets/img/ped_typical_behavior.png
importance: 3
category: work
related_publications: true
github: https://github.com/jskumaar/pedestrianHybridModel
---

Pedestrian behavior prediction is one of the hardest open problems in AV perception — pedestrians are multimodal (they can cross or not cross), their intent is latent, and predictions must be accurate over 5–10 second horizons to be useful for planning. This work develops the Multimodal Hybrid Pedestrian (MHP) model: an explainable, probabilistic behavior model based on hybrid automaton theory that predicts long-horizon pedestrian actions and trajectories at unsignalized crosswalks, with direct integration into AV motion planning.

#### Model Structure

The MHP model is a hybrid automaton with four discrete behavioral modes:

- **Approaching** — pedestrian walking toward the crosswalk
- **Waiting** — pedestrian paused at the curb, evaluating a crossing gap
- **Crossing** — pedestrian actively traversing the road
- **Walking away** — pedestrian departing without crossing

Transition guards encode the pedestrian's decision-making logic: the model separately represents *intent to cross* and *execution of crossing*, unlike prior work that assumed all pedestrians at a crosswalk would eventually cross. This separation produces significantly less conservative predictions for pedestrians who ultimately walk away.

Within each discrete mode, continuous motion evolves according to mode-specific dynamics (linear motion models with learned parameters). The model outputs a probability distribution over future mode sequences and associated continuous trajectories, represented as a set of forward reachable prediction envelopes.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/ped_typical_behavior.png" title="Typical pedestrian behavior" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/ped_MHP_model.png" title="Multimodal Hybrid Pedestrian (MHP) model" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: a typical pedestrian crossing scenario at an unsignalized crosswalk. Right: the hybrid automaton model with four discrete modes and continuous motion dynamics in each.
</div>

#### Validation

The MHP model was validated against two baselines — a constant velocity model and a baseline hybrid automaton that does not separately model crossing intent — on two datasets:

- **Real-world data**: pedestrian trajectories collected on Michigan streets involving interactions with both human-driven and automated vehicles
- **Virtual reality data**: pedestrian behavior captured using an omnidirectional treadmill and VR headset in a simulated urban environment with AV interactions

Across both datasets, the MHP model's probabilistic predictions more frequently contained the ground truth trajectory compared to both baselines, particularly in scenarios where pedestrians wait and then cross — the mode transition the constant velocity model cannot represent {% cite jayaraman2021multimodal %} {% cite jayaraman2020analysis %}.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/MHP_FRS.png" title="Multimodal pedestrian prediction envelopes" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <p align="justify">
      Prediction envelopes at time t<sub>p</sub>. e<sup>1</sup><sub>p</sub> is the constant velocity prediction. e<sup>2</sup><sub>p</sub> and e<sup>3</sup><sub>p</sub> are the MHP predictions for waiting and crossing, respectively. The pedestrian turns to cross (solid orange), which the constant velocity model misses but the MHP model captures via e<sup>3</sup><sub>p</sub>.
    </p>
</div>

#### Integration with AV Motion Planning

The probabilistic predictions from the MHP model feed directly into a Behavior-aware Model Predictive Controller (B-MPC) for AV motion planning. The B-MPC uses the predicted pedestrian mode probabilities and trajectory envelopes as constraints and costs, enabling the AV to plan paths that are safe across the distribution of possible pedestrian futures — not just the most likely one. This produces less conservative AV behavior compared to worst-case planning while maintaining safety guarantees {% cite jayaraman2020efficient %} {% cite jayaraman2021automated %}.

The model is applicable across urban scenarios: midblock crosswalks, signalized and unsignalized intersections, one-way and two-way streets.

#### Transferable Engineering

This work is directly applicable to any AV stack requiring long-horizon pedestrian prediction: the MHP model is a plug-in probabilistic predictor that outputs trajectory distributions compatible with standard MPC and sampling-based planners.