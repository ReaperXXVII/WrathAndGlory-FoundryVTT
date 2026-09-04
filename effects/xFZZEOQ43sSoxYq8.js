if (this.actor)
{
  let armour = this.actor.items.get(this.item.getFlag("wrath-and-glory-revised", "applied"));
  
  if (armour)
  {
    armour.system.rating++;
    armour.system.traits.list.push({name : "bulk", rating: 1});
  }
}