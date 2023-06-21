---
testspace:
title: gh.fixture.teardown
description: Normal with teardown fixture
parent: Fixtures GitHub
before:
  name: github::normal
  description: before - simple input
  _inactive_timeout: 2 # 2 minute timeout, ~ 1 minute "Continue" prompt
  payload:
    a: this
    b: that
after:
  name: github::teardown
  description: before - simple input
  payload:
    a: this
    b: that
---

# {{ spec.title }}
{{ spec.description }}

{% include cases.md %}

## Workaround


