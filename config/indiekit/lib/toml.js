export function escapeTomlString(value = "") {
  return String(value).replaceAll("\\", "\\\\").replaceAll('"', '\\"')
}

export function formatTomlString(key, value) {
  return `${key} = "${escapeTomlString(value)}"`
}

export function formatTomlArray(key, values = []) {
  const items = values
    .filter(Boolean)
    .map((value) => `"${escapeTomlString(value)}"`)
    .join(", ")

  return `${key} = [${items}]`
}

export function buildFrontMatter(lines) {
  return `+++\n${lines.filter(Boolean).join("\n")}\n+++\n`
}
