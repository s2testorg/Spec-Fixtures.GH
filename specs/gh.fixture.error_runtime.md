---
testspace:
title: gh.fixture.error_runtime
description: Error in runtime handler
parent: Fixtures GitHub
before:
  name: github::runtime_error
  description: before - simple input
  input:
    a: this
    b: that
---

# {{ spec.title }}
{{ spec.description }}

{% include cases.md %}

## Workaround




