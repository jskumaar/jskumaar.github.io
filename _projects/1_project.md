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

This work develops a closed-loop machine teaching framework for transparent human-robot collaboration in teams. By combining counterfactual reasoning, particle filter-based belief modeling, and pedagogical scaffolding, the system helps diverse human teammates understand and predict robot behavior, especially in time-constrained or resource-limited settings {% cite jayaraman2024understanding %}.

The approach dynamically models and updates individual and team beliefs about a robot’s decision-making policy—modeled via Inverse Reinforcement Learning (IRL) in an Markov Decision Process (MDP) framework by observing user test responses and robot demonstrations {% cite jayaraman2024modeling %}. Demonstrations are selected based on information gain from simulated counterfactuals, with belief updates performed via custom Bayesian filters.


<div class="row">
    <div class="col-md-8 col-sm-10 mt-3">
        {% include figure.liquid loading="eager" path="/assets/img/group_teaching_overview.png" title="Belief modeling in group teaching" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <p align="justify">
        This illustration highlights the complexity of teaching human groups by modeling different belief states. Top-left shows three individuals with different beliefs about the robot’s decision-making. These beliefs are used to generate targeted or aggregated representations shown at the bottom: individual beliefs (distinct understanding per person), team common belief (intersection of all), and team joint belief (union of all). The robot uses these representations to adapt its explanations for improved understanding across the team.
    </p>
</div>


A closed-loop teaching framework leverages insights from education literature to adaptively generate demonstrations based on individual and aggregated team beliefs. Human learners are provided with several lessons (scaffolding) associated with concepts with increasing complexity. Each lesson has demonstrations (examples) of robot behavior, check-in tests to evaluate their understanding of the underlying concept, and feedback on their performance in these tests.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/group_teaching_comparison_belief_space.png" title="Belief updates across different teaching strategies." class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This figure shows how particle filter-based belief distributions evolve for three individuals (P1, P2, P3) and their aggregated team beliefs (common and joint) across teaching stages: demonstrations, tests, and feedback. Feedback is either confirmatory (✓) or corrective (✗), and helps refine the learner’s understanding of the robot's reward function in terms of mud cost (w₀), recharge reward (w₁), and action cost (w₂).
</div>

The research explored how teaching strategies tailored to group or individual beliefs can significantly benefit different groups characterized by varying levels of learner capabilities. We found that group belief strategy to be advantageous for groups with mostly proficient learners, while individual strategies were better suited for groups with mostly naive learners. We validated these findings in simulated {% cite jayaraman2024understanding %} and empirical online studies {% cite jayaraman2025groupTeaching %}. 

This research lays the groundwork for real-time adaptive explainable AI in multi-agent human-AI teams and is directly applicable to scenarios involving group trust calibration, dynamic policy explanation, and collective behavior modeling. It has direct implications for interactive AI systems, collaborative robotics, and autonomous decision support tools.

