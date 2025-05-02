---
layout: page
title: Explainable AI Decision-Making in Human-AI Groups
description: A closed-loop machine teaching framework that uses explainable robot demonstrations and particle filters to model and adapt to individual and group beliefs, improving human understanding of robot decision-making in teams.
img: /assets/img/group_teaching_thumbnail.png
importance: 1
category: work
related_publications: true
---

This research topic focuses on enhancing the transparency and efficacy of human-robot collaboration among human groups through explainable robot demonstrations. The goal is to help human collaborators understand how the robots make decisions generally for a task.

The framework uses machine teaching to explain the robot's policy to human learners. Using counterfactual reasoning and scaffolding, the robot provides several demonstrations to teach various concepts and trade-offs in its internal reward function to the human learners. The approach involves using particle filters (PF) for modeling individual and aggregated team beliefs about the robot’s decision-making (i.e., its reward). 



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/group_teaching_overview.png" title="Belief modeling in group teaching" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <p align="justify">
        This illustration highlights the complexity of teaching human groups by modeling different belief states. Top-left shows three individuals with different beliefs about the robot’s decision-making. These beliefs are used to generate targeted or aggregated representations shown at the bottom: individual beliefs (distinct understanding per person), team common belief (intersection of all), and team joint belief (union of all). The robot uses these representations to adapt its explanations for improved understanding across the team.
    </p>
</div>


A closed-loop teaching framework leverages insights from education literature to adaptively generate demonstrations based on individual and aggregated team beliefs. Human learners are provided with several lessons, with each lesson having demonstrations (examples) of robot behavior, check-in tests to evaluate their understanding of the underlying concept, and feedback on their performance in these tests.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/group_teaching_comparison_belief_space.png" title="Belief updates across different teaching strategies." class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This figure shows how particle filter-based belief distributions evolve for three individuals (P1, P2, P3) and their aggregated team beliefs (common and joint) across teaching stages: demonstrations, tests, and feedback. Feedback is either confirmatory (✓) or corrective (✗), and helps refine the learner’s understanding of the robot's reward function in terms of mud cost (w₀), recharge reward (w₁), and action cost (w₂).
</div>

The research explored how teaching strategies tailored to group or individual beliefs can significantly benefit different groups characterized by varying levels of learner capabilities. For instance, a group belief strategy was found to be advantageous for groups with mostly proficient learners, while individual strategies were better suited for groups with mostly naive learners. We validated these findings in simulated and empirical online studies.

