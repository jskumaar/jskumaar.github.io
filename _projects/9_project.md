---
layout: page
title: Contact-Aware Teleoperation for Robotic Manipulation
description: A teleoperation system using camera-based hand tracking and VR interfaces that retargets human hand motion to robot configurations via optimal control, enforcing physical grasp stability through a Grasp Wrench Space formulation within a TAMP framework.
img: /assets/img/pedAV_interaction_thumbnail.png
importance: 2
category: work
related_publications: false
---

Teleoperation is the primary mechanism for collecting high-quality robot manipulation data for policy learning — but translating human hand motion into robot-feasible, contact-stable configurations remains a hard problem. This project develops a contact-aware teleoperation system that handles the full manipulation pipeline: tracking the operator's hand pose from camera input, retargeting that motion to robot-feasible configurations, recommending grasp locations, and enforcing physical contact stability through a two-stage optimal control formulation within a Task and Motion Planning (TAMP) framework. The system supports multiple input modalities — camera-based hand tracking and a VR interface — enabling flexible operator setups while using the same underlying retargeting and constraint formulation. The system is implemented as a sim-to-real pipeline: the controller is developed and validated in PyBullet simulation, then deployed on the physical Franka Panda using ROS and the `franka_ros` interface, with identical motion primitives and constraint formulations in both environments.

#### State Representation

Operator hand pose is estimated from camera input using **MediaPipe Hands**, providing 9 joint positions and velocities: $$\mathbf{q}_h \in \mathbb{R}^9$$, $$\dot{\mathbf{q}}_h \in \mathbb{R}^9$$, giving full operator hand state $$\mathbf{x}_h = [\mathbf{q}, \dot{\mathbf{q}}]^T \in \mathbb{R}^{18}$$. The same state representation is used when the VR interface is active, with hand pose estimated from the VR headset's hand-tracking module. The robot state is $$\mathbf{x}_r = [\mathbf{q}_r, \dot{\mathbf{q}}_r]^T$$. The environment contains a set of object frames $$\mathcal{O} = \{o_0 \ldots o_m\}$$ with known SE(3) poses in the world frame. A feasibility function $$F(\mathbf{q}_r)_{o_n} \in \{0,1\}$$ evaluates whether a robot configuration places both thumb and index finger on the surface of object $$o_n$$, defining the set of feasible, collision-free grasp configurations $$\mathcal{Q}_{r,F}$$.

#### Two-Stage TAMP Formulation

The manipulation problem is decomposed into two modes:

**Stage 1 — Approach (Transit Mode $$\sigma_0$$).** The robot tracks the teleoperator's wrist velocity while maintaining collision-free clearance from all objects in the scene. The controller solves:

$$\min_{\boldsymbol{\theta}_r} \; (\boldsymbol{\theta}_h - \boldsymbol{\theta}_r)^T \mathbf{Q} (\boldsymbol{\theta}_h - \boldsymbol{\theta}_r) \quad \text{s.t.} \quad \text{collision-free}(\mathcal{O},\, \delta)$$

where $$\mathbf{Q}$$ weights deviation from the human configuration and $$\delta$$ is a collision clearance tolerance. A desired grasp location is recommended by computing fingertip proximity between the simulated human hand and candidate object surfaces, implicitly signaling object selection to the operator.

**Stage 2 — Grasp ($$\sigma_1$$).** Once the grasp location is fixed in object coordinates, the controller continues tracking the human's velocity reference while enforcing contact stability. Required grasp wrenches are computed from the planned reference trajectory and object inertial properties. A Grasp Wrench Space (GWS) constraint enforces that the contact forces at the fixed grasp locations span the required wrench space — ensuring the grasp is physically stable throughout the motion even as the reference trajectory evolves.

#### Key Design Choices

The two-stage decomposition cleanly separates free-space motion (approach) from constrained contact motion (grasp), enabling different control objectives and constraint sets at each phase. Human teleoperator input provides a warm-start and regularization for the grasp planning sub-problem, bypassing the combinatorial cost of a standalone grasp planner while preserving operator intent. The TAMP formulation naturally accommodates discrete mode transitions (approach → grasp → transport → release) and can be extended to multi-step manipulation sequences.

**Multimodal input interfaces.** The retargeting controller is agnostic to the input sensing modality — the same optimal control formulation operates on MediaPipe-estimated hand pose or VR controller / hand-tracking pose. The camera-based MediaPipe interface requires no wearable hardware, lowering the barrier for large-scale data collection. The VR interface adds depth and presence cues that improve operator performance on contact-rich tasks where visual feedback is critical. Exploring both interfaces allows direct comparison of operator workload, data quality, and task success rates across modalities.

#### Transferable Engineering

This work applies directly to: robot learning data collection pipelines (teleoperation datasets for imitation learning and RLHF), humanoid robot manipulation, contact-rich task execution, and any system that must translate human intent into physically consistent, constraint-satisfying robot motion. The teleoperation data collected through this system serves as high-quality human demonstration data for training robot learning policies — bridging the gap between teleoperation infrastructure and downstream imitation learning or reinforcement learning from human feedback.