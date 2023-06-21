---
testspace:
title: gh.fixture.error_name_colon
description: Error in name with the colon
parent: Fixtures GitHub
before:
  name: github:normal
  description: before - simple input
  input:
    a: this
    b: that
---

# {{ spec.title }}
{{ spec.description }}

{% include cases.md %}

## Workaround

