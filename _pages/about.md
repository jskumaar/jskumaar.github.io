---
layout: about
title: About
permalink: /
subtitle: 'Postdoctoral Researcher &nbsp;·&nbsp; <a href="https://www.ri.cmu.edu/">Robotics Institute</a> &nbsp;·&nbsp; <a href="https://www.cmu.edu/">Carnegie Mellon University</a> &nbsp;·&nbsp; <a href="https://aipex-lab.github.io/">AiPEX Lab</a>'

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>sureshkj@andrew.cmu.edu</p>
    <p><a href="/cv">Curriculum Vitae</a></p>

news: true
selected_papers: true
social: true
---

I build autonomous systems that work effectively alongside humans — predicting how people will move and behave, detecting when they are confused or frustrated, and explaining what a robot is doing and why. My work spans the full stack: from human behavior modeling and real-time multimodal perception to planning algorithms, machine teaching frameworks, and validated user studies with physical robots and vehicles. I am actively seeking research and engineering positions in robotics and autonomous systems.

**Research.** My work targets efficiently leveraging human inputs for robot learning and operation. This spans making robots *human-aware* — developing probabilistic pedestrian and driver behavior models that feed into AV motion planners, and real-time multimodal systems that detect user surprise, confusion, and frustration from facial action units and audio features; making robots *understandable* — designing machine teaching frameworks that explain robot decision-making to individuals and groups using particle filter-based belief models and information-theoretic demonstration selection; and aligning how robots *learn from people* — formalizing interaction alignment across RLHF and interactive imitation learning paradigms, improving human-teleoperation pipeline for contact-aware manipulation, and evaluating where foundation models still lack the physical intuition (rigid-body reasoning, state understanding, physical plausibility) that humans supply.

**Engineering.** I design and implement end-to-end systems using ROS across robotics projects: a contact-aware teleoperation system for dexterous manipulation that tracks teleoperator hand pose via MediaPipe/VR, retargets motion via optimal control, and enforces grasp stability through Grasp Wrench Space constraints in a three-stage TAMP formulation, validated in MuJoCo and planned for deployment on a Kinova arm with a LEAP hand; a safety-aware LLM action planner (Qwen3) grounded in ISO robotics safety standards via a Neo4j knowledge graph with VLM-based scene understanding (Llama 3.2-Vision), validated in PyBullet; a multimodal engagement prediction system (78% accuracy) for equitable participation in children's groups using OpenFace and MediaPipe; a real-time binary XGBoost classifier (79% true-positive rate, ~2.7 s mean detection latency) deployed autonomously in a driving simulator using OpenFace facial action units and OpenSMILE audio features; a Kalman filter-based driver trust estimator with adaptive communication that reduced trust miscalibration by ~40% in user studies;  and fine-tuning of ACT and Diffusion Policy on a low-cost robot arm (LeRobot/SO-101) with an RLHF preference reward model from paired teleoperation demonstrations.

**Skills:** Python &nbsp;·&nbsp; ROS &nbsp;·&nbsp; PyTorch &nbsp;·&nbsp; MuJoCo &nbsp;·&nbsp; Isaac Sim / Isaac Lab &nbsp;·&nbsp; PyBullet &nbsp;·&nbsp; MediaPipe &nbsp;·&nbsp; OpenFace &nbsp;·&nbsp; OpenSMILE &nbsp;·&nbsp; Neo4j / GraphRAG &nbsp;·&nbsp; LLMs / VLMs (Llama, Qwen) &nbsp;·&nbsp; Kalman &amp; Particle Filters &nbsp;·&nbsp; MPC &nbsp;·&nbsp; RLHF &amp; Interactive Imitation Learning &nbsp;·&nbsp; Inverse Reinforcement Learning &nbsp;·&nbsp; Hybrid Automata &nbsp;·&nbsp; VR Teleoperation &nbsp;·&nbsp;

<h4>Education</h4>
<ul>
  <li>Ph.D. in Mechanical Engineering, University of Michigan, Ann Arbor (2021)</li>
  <li>M.S. in Mechanical Engineering, University of Michigan, Ann Arbor (2018)</li>
  <li>B.E. in Production Engineering, Anna University, India (2013)</li>
</ul>

<h4>Research Interests</h4>
Human behavior modeling &nbsp;·&nbsp; Explainable AI/robot decision-making &nbsp;·&nbsp; Safety-aware robot planning &nbsp;·&nbsp; Human-robot teaming &nbsp;·&nbsp; Trust in autonomous systems &nbsp;·&nbsp; Multimodal human state estimation
