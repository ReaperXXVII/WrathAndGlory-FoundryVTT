if (args.result.isWrathComplication)
{
  	args.result.text[this.effect.id] = {label : this.effect.name, description : `Roll on @UUID[RollTable.${game.settings.get("wrath-and-glory-revised", "tableSettings").perils}]{Perils of the Warp}!`}
}