---
layout: page
title: Explainable AI Decision-Making in Human-AI Groups
description: A closed-loop machine teaching framework using particle filter-based belief models and information-theoretic demonstration selection to adaptively explain robot decision-making to individuals and diverse groups.
img: /assets/img/group_teaching_thumbnail.png
importance: 6
category: work
related_publications: true
---

When robots work alongside humans, people need to understand *how the robot makes decisions* — not just what it does. This project develops a closed-loop machine teaching framework that explains robot decision-making to human groups by modeling individual and team beliefs as particle filters, selecting demonstrations to maximize information gain via counterfactual reasoning, and scaffolding the teaching process with increasing conceptual complexity. The underlying framework — learning a reward function from human demonstrations and feedback — is closely related to imitation learning and inverse reinforcement learning, and the belief-tracking approach generalizes to any robot learning system that needs to model a human's understanding of a learned policy.

#### Problem Formulation: IRL in an MDP

The robot's decision-making policy is modeled as an **Inverse Reinforcement Learning (IRL)** problem in an **MDP** framework. The robot's behavior is parameterized by a reward function with weights **w** = [w₀, w₁, w₂] over task-relevant features (e.g., terrain cost w₀, recharge reward w₁, action cost w₂). A learner's understanding of the robot is represented as a belief distribution P(**w** | observations) over the reward weight space — what they think the robot is optimizing {% cite jayaraman2024modeling %}.

#### Belief Modeling: Particle Filters

Each learner's belief is maintained as a **particle filter** — a set of N weighted particles, each representing a hypothesis (**w**⁽ⁱ⁾, wt⁽ⁱ⁾) about the robot's reward weights. Beliefs are updated via Bayesian inference after each teaching interaction:

- **After a demonstration**: particle likelihoods are updated based on how consistent the demonstrated robot trajectory is with each reward hypothesis, under a Boltzmann rationality model (trajectories that are near-optimal under hypothesis **w** get higher weight)
- **After a test response**: likelihoods are updated based on whether the learner's predicted robot behavior is consistent with having understood the robot's policy under each hypothesis

For a team of K learners, three aggregate belief representations are computed from individual particle sets:

- **Individual beliefs**: separate particle filter per person, tracking each learner's understanding independently
- **Team common belief** (intersection): particles consistent with *all* individual beliefs — the intersection of what the team agrees on
- **Team joint belief** (union): particles consistent with *any* individual belief — the full space of current team understanding

<div class="row">
    <div class="col-md-8 col-sm-10 mt-3 mx-auto">
        {% include figure.liquid loading="eager" path="/assets/img/group_teaching_overview.png" title="Belief modeling in group teaching" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <p align="justify">
        Three individuals hold different beliefs about the robot's reward function (top-left). These are aggregated into the team common belief (intersection) and team joint belief (union), which the teaching system uses to select demonstrations that efficiently improve group-level understanding.
    </p>
</div>

#### Demonstration Selection: Counterfactual Information Gain

Demonstrations are selected to maximize expected information gain over the current belief distribution. For each candidate demonstration d, the system simulates how the belief particle set would update upon observing d — a **counterfactual** rollout — and computes the expected KL divergence between the prior and posterior. The demonstration with the highest expected information gain is selected {% cite jayaraman2024understanding %}.

This criterion reasons about what a learner *would* learn from each demonstration, rather than simply showing what the robot has done. It naturally favors demonstrations that are informative at the boundary of the learner's current belief, analogous to active learning query selection.

#### Pedagogical Scaffolding

The teaching process is structured into **lessons** of increasing conceptual complexity, drawing on mastery-based learning from education research. Each lesson consists of:
1. **Demonstrations**: robot trajectories selected by the information-gain criterion, sequenced from simple to complex concepts
2. **Check-in test**: a novel scenario where the learner predicts the robot's behavior — the response updates the particle filter
3. **Feedback**: confirmatory (✓) or corrective (✗), further refining the belief estimate

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/group_teaching_comparison_belief_space.png" title="Belief updates across teaching strategies" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Particle filter belief distributions for three individuals (P1, P2, P3) and team aggregates evolve across demonstrations, tests, and feedback — converging toward the true robot reward function (w₀, w₁, w₂). Corrective feedback (✗) produces larger belief shifts than confirmatory feedback (✓).
</div>

#### Results

Three teaching strategies — individual, team common belief, and team joint belief — were evaluated across groups with varying learner capability profiles:

- **Group belief strategy** (targeting team common belief) was superior for groups with **mostly proficient learners**: efficient convergence of shared team understanding with fewer demonstrations
- **Individual strategy** was superior for groups with **mostly naïve learners**: aggregate beliefs from naïve learners would mislead the teaching selection, so per-person targeting was necessary
- Both strategies significantly outperformed an unstructured baseline in simulation {% cite jayaraman2024understanding %} and in an **empirical online study with human participants** {% cite jayaraman2025groupTeaching %}

#### Transferable Engineering

The particle filter belief estimator is a general Bayesian inference engine applicable wherever a system needs to track a human's latent understanding or intent from behavioral observations. The counterfactual information-gain demonstration selection criterion is directly applicable to active learning, RLHF query selection, and any teaching or explanation system where the goal is to maximize information transfer per human interaction.