---
layout: page
title: Real-Time Trust Estimation and Calibration for Autonomous Vehicles
description: A Kalman filter-based framework that continuously estimates driver trust from behavioral signals and actively manages trust through adaptive communication, reducing miscalibration by ~40%.
img: /assets/img/driver_trust_thumbnail.png
importance: 4
category: work
related_publications: true
---

Driver trust miscalibration — where drivers place too much or too little trust in automation — is a major safety hazard in autonomous driving. Overtrust leads to dangerous over-reliance; undertrust leads to unnecessarily frequent takeovers. This work builds a closed-loop trust management system: a real-time estimator that infers driver trust from behavioral signals, and a calibration controller that adjusts how the ADS communicates with the driver to correct miscalibration before it causes unsafe behavior.

#### Trust Estimation: Kalman Filter Framework

Driver trust is modeled as a continuous latent state $$T_k \in [0, 1]$$ that evolves as the driver observes ADS performance events. The estimator uses a Kalman filter with three behavioral measurement inputs:

- **Eye-tracking focus** ($$\phi$$): fraction of time the driver monitors the road vs. engages in non-driving tasks — a proxy for vigilance and trust-related attention allocation
- **ADS usage time** ($$\upsilon$$): how long the driver leaves the system engaged without intervention — higher usage correlates with higher trust
- **Secondary task performance** ($$\pi$$): performance on a concurrent non-driving task, which increases when the driver trusts the ADS to handle driving

The filter is driven by discrete ADS performance events — true alarms ($$L$$: system correctly warns of a hazard), false alarms ($$F$$: incorrect warning), and misses ($$M$$: missed hazard) — which shift the trust state estimate up or down accordingly. Critically, the estimator operates continuously without requiring disruptive self-report surveys, providing a real-time trust signal suitable for closed-loop control {% cite azevedo2021real %}.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="/assets/img/driver_trust_estimator.png" title="Real-time trust estimation framework" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The Kalman filter estimator computes real-time trust T<sub>k</sub> from eye-tracking focus (ϕ), ADS usage time (υ), and secondary task performance (π), updated by system performance events (true alarms L, false alarms F, misses M).
</div>

#### Trust Calibration: Context-Aware Communication Controller

Building on the estimator, a trust calibration controller compares the estimated trust $$T_k$$ against the ADS's known capability envelope. When a miscalibration is detected:

- If $$T_k$$ is **too high** relative to ADS capability (overtrust): the system selects a warning message designed to reduce trust and increase driver vigilance
- If $$T_k$$ is **too low** relative to ADS capability (undertrust): the system selects an encouraging message designed to increase confidence and reduce unnecessary takeovers

Message selection is context-aware — different messages are triggered based on the driving scenario (highway, urban, adverse weather) and the magnitude of the miscalibration. This avoids intrusive or repeated messaging that would itself frustrate the driver {% cite azevedo2020context %}.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="/assets/img/driver_trust_controller.png" title="Trust calibration controller framework" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The calibration controller compares estimated trust T<sub>k</sub> to ADS capability bounds. When miscalibrated, it selects an adaptive message to shift trust toward the appropriate range.
</div>

#### Results

Experimental user studies showed that the adaptive calibration framework reduced the duration of miscalibrated trust periods by approximately **40%** compared to a no-communication baseline, across both overtrust and undertrust conditions {% cite azevedo2020context %}. The false alarm / miss effects on trust were also characterized: false alarms produced larger trust decrements than misses produced trust decrements, informing how ADS reliability specs map to trust dynamics {% cite azevedo2020comparing %}.

#### Transferable Engineering

The Kalman filter trust estimator is a generic state estimator that can be adapted to any human-machine system where behavioral proxies for trust or engagement are observable. The closed-loop calibration controller is directly applicable to ADAS, semi-autonomous systems, and any deployed system where trust miscalibration is a safety concern.