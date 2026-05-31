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

**Research.** My work targets two core challenges in deploying robots in human-centric environments. The first is making robots *human-aware* — developing probabilistic pedestrian and driver behavior models that feed into AV motion planners, and real-time multimodal systems that detect user surprise, confusion, and frustration from facial action units and audio features, enabling robots to sense and adapt to human state. The second is making robots *understandable* — designing machine teaching frameworks that explain robot decision-making to individuals and groups using particle filter-based belief models and information-theoretic demonstration selection, so that humans can build accurate mental models of robot policy.

**Engineering.** I design and implement end-to-end systems: a safety-aware LLM action planner grounded in ISO robotics safety standards via a Neo4j knowledge graph with GraphRAG retrieval and VLM-based scene understanding, executing on a Franka Panda in PyBullet; a contact-aware teleoperation controller that retargets human MOCAP input via optimal control and enforces physical grasp stability through Grasp Wrench Space constraints in a TAMP framework; a real-time binary XGBoost classifier (79.4% true positive rate, ~2.7 s mean detection latency) deployed autonomously in a driving simulator using OpenFace 2.0 facial action unit features and OpenSMILE MFCC audio features; and a Kalman filter-based driver trust estimator with adaptive communication that reduced trust miscalibration by ~40% in user studies.

**Skills:** Python &nbsp;·&nbsp; PyTorch &nbsp;·&nbsp; PyBullet &nbsp;·&nbsp; OpenFace 2.0 &nbsp;·&nbsp; OpenSMILE &nbsp;·&nbsp; XGBoost &nbsp;·&nbsp; Neo4j / GraphRAG &nbsp;·&nbsp; LLMs / VLMs (Llama, Qwen) &nbsp;·&nbsp; Kalman &amp; Particle Filters &nbsp;·&nbsp; MPC &nbsp;·&nbsp; Inverse Reinforcement Learning &nbsp;·&nbsp; Hybrid Automata &nbsp;·&nbsp; MOCAP Systems &nbsp;·&nbsp; Franka Panda

<h4>Education</h4>
<ul>
  <li>Ph.D. in Mechanical Engineering, University of Michigan, Ann Arbor (2021)</li>
  <li>M.S. in Mechanical Engineering, University of Michigan, Ann Arbor (2018)</li>
  <li>B.E. in Production Engineering, Anna University, India (2013)</li>
</ul>

<h4>Research Interests</h4>
Human behavior modeling &nbsp;·&nbsp; Explainable AI/robot decision-making &nbsp;·&nbsp; Safety-aware robot planning &nbsp;·&nbsp; Human-robot teaming &nbsp;·&nbsp; Trust in autonomous systems &nbsp;·&nbsp; Multimodal human state estimation