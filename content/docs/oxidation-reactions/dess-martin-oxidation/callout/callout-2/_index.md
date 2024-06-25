---
title: Callout Component
linkTitle: Callout
prev: /docs/guide/callout
---

{{<figure-dynamic-toggle
    dark-src="dark.png"
    light-src="light.png"
    title="Description of the image"
    caption="This image changes based on the theme."
>}}

{{< tabs items="JSON,YAML,TOML" >}}

  {{< tab >}}**JSON**: JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.
  
  {{<figure-dynamic-toggle
    dark-src="dark.png"
    light-src="light.png"
    title="Description of the image"
    caption="This image changes based on the theme."
>}}
  {{< /tab >}}

  {{% steps %}}

### Step 1

This is the first step.

### Step 2

This is the second step.

{{% /steps %}}

  {{< tab >}}**YAML**: YAML is a human-readable data serialization language.{{< /tab >}}
  {{< tab >}}**TOML**: TOML aims to be a minimal configuration file format that's easy to read due to obvious semantics.{{< /tab >}}

{{< /tabs >}}