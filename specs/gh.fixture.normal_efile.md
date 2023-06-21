---
testspace:
title: gh.fixture.normal_efile
description: Nornam using e-file (file reference)
parent: Fixtures GitHub
before:
  name: github::normal_efile
  description: before - simple input
  payload:
    a: this
    b: that
    file: "@file.json"
---

# {{ spec.title }}
{{ spec.description }}

{% include cases.md %}

## Workaround


