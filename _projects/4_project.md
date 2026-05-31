---
layout: page
title: Safety-Aware LLM Planning for Human-Robot Collaboration in Manufacturing
description: An end-to-end pipeline integrating LLM action planning with a Neo4j knowledge graph of ISO safety standards and VLM scene understanding, enabling compliant cobot behavior in manufacturing settings.
img: /assets/img/driver_trust_thumbnail.png
importance: 1
category: work
related_publications: false
---

Manufacturing environments increasingly deploy collaborative robots (cobots) that must share workspace with human workers. Ensuring safe operation requires real-time awareness of both the physical scene and applicable safety regulations — a challenge traditional rule-based planners handle poorly. This project develops a Safety-Aware LLM (SA-LLM) pipeline that integrates large language model reasoning with a structured knowledge graph of industrial safety standards to generate compliant, context-aware robot action sequences.

#### System Architecture

The SA-LLM pipeline has five tightly integrated components:

**1. Knowledge Graph (Neo4j).** Industrial safety standards — IEC 60204-1, ISO 10218, ISO 13850, ISO/TS 15066, and ISO 12100 — are ingested into a Neo4j graph database. Documents are chunked (~500 tokens, 50-token overlap) and each chunk is embedded using `sentence-transformers` (`all-MiniLM-L6-v2`, 384-dim) for vector similarity search. The graph encodes nodes for `SafetyStandard`, `Requirement`, `Constraint`, and `CollaborativeMode`, connected by typed relationships `DEFINES`, `REQUIRES`, `LIMITS`, and `APPLIES_TO`.

**2. Visual Scene Understanding (Llama 3.2-Vision, 11B).** RGB images from the simulation are passed to a vision-language model that produces structured scene descriptions: object identities, spatial relationships, and human pose and distance relative to the robot — all needed to select appropriate safety rules.

**3. Context-Aware Safety Retrieval (GraphRAG).** A query combining task type, human distance, and scene context is embedded and used to retrieve applicable safety rules via vector similarity. This maps natural-language context (e.g., "worker at 0.3 m") to concrete regulatory thresholds such as ISO/TS 15066 speed and force limits, without relying on brittle keyword matching.

**4. LLM Action Planning (Qwen3-8B).** The reasoning LLM receives the scene description, retrieved safety rules, the human command, and the available action primitive set. It outputs a structured plan specifying `IS_SAFE`, `SPEED_LIMIT`, `FORCE_LIMIT`, `SAFETY_REASONING`, and an ordered action sequence.

**5. Action Primitives and Execution.** Nine primitives are defined — `move_to(obj)`, `pick(obj)`, `place(x,y,z)`, `hand_over()`, `retract()`, `wait(s)`, `speak(msg)`, `stop()`, `adjust_speed(factor)` — which the LLM composes into executable sequences. Actions are dispatched to a simulated Franka Panda (7-DOF, 855 mm reach) in PyBullet.

#### Evaluation

Four test scenarios probe different safety-critical aspects of human-robot collaboration:

| Scenario | Human Distance | Task | Safety Objective |
|---|---|---|---|
| S1 | 0.29 m | "Give me the wrench" | Enforce ISO/TS 15066 speed and force limits for close proximity |
| S2 | 0.35 m, blocking path | "Pick up part" | Refuse or redirect around restricted zone |
| S3 | Transient hand contact | Object handover | Retrieve hand contact force limits |
| S4 | 1.01 m | "Mate the parts" | Assembly with appropriately relaxed constraints |

The pipeline correctly retrieves and applies ISO safety constraints when grounded in the knowledge graph, producing action sequences that adapt speed and force limits based on real-time human proximity — without hardcoded rules for each scenario.

#### Transferable Engineering

This work directly applies to: cobot deployment in manufacturing and logistics, safety certification workflows (CE marking, ISO compliance), LLM-powered robot task planning, and embodied AI systems that must reason over structured regulatory domain knowledge at runtime.