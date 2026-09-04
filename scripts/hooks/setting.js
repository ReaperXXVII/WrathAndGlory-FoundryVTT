export default function () {
  Hooks.on("updateSetting", (setting) => {
    if(setting.key == "wrath-and-glory-revised.glory" || setting.key == "wrath-and-glory-revised.ruin")
    {
      game.counter.render({force: true})
    }
  })
}