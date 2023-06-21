---
testspace:
title: gh.fixture.normal_file
description: Normal using a JSON file
parent: Fixtures GitHub
before:
  name: github::normal_file
  description: before - simple input
  payload: "@file.json"
---

# {{ spec.title }}
{{ spec.description }}

{% include cases.md %}

## Workaround


