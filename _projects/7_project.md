---
layout: page
title: Trustworthy interaction between autonomous vehicles and drivers
description: Developed real-time trust estimation and calibration frameworks for autonomous vehicles, using behavioral signals and adaptive communication to prevent driver misuse and disuse.
img: /assets/img/driver_trust_thumbnail.png
importance: 7
category: work
related_publications: true
---

This body of research explores how to measure and manage driver trust in automated driving systems (ADSs), with a focus on preventing trust miscalibration—situations where drivers place too little or too much trust in automation. A key contribution is the development of a Kalman filter-based framework that continuously estimates driver trust in real time by integrating behavioral cues such as eye-tracking, system usage, and performance on a non-driving task. These estimations were shown to track trust levels effectively and adapt to driver behavior across varied driving conditions.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="/assets/img/driver_trust_estimator.png" title="Real-time trust estimation framework" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A Kalman filter-based estimator computes real-time trust levels using driver behavioral cues—eye-tracking focus (ϕ), ADS usage time (υ), and secondary task performance (π). Trust is estimated continuously as drivers interact with an ADS that may issue true alarms (L), false alarms (F), or misses (M), without relying on disruptive self-reports.
</div>

Building on the above work, a trust calibration framework was introduced that doesn't just passively estimate trust, but actively manages trust by adjusting how the ADS communicates with the driver. When a miscalibration is detected—such as a mismatch between a driver’s trust level and the system’s actual capabilities—the system responds with context-aware messages to either encourage or warn the driver. Experimental results show that this adaptive communication reduced miscalibrated trust periods by approximately 40%, helping avoid misuse or disuse of the system and improving safety.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="/assets/img/driver_trust_controller.png" title="Trust calibration controller framework" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The trust calibration system compares the estimated trust (Tₖ) with the AV’s known capabilities. If miscalibration is detected, the system selects an adaptive communication strategy to influence the driver’s trust via messages, helping bring trust levels back into alignment.
</div>