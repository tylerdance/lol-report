function PatchNotes() {
    return(
        <div id="patchnotes-master-div">
            <h2 id="patch-notes-header">Patch <strong>11.3</strong> Bug Fixes</h2>
            <div id="patch-notes-div">
                <ul>
                    <li>
                        When a player is flagged as AFK/Leaver at the end of any Ranked game, they will be notified that their LP will be reduced; this applies to both wins and losses. The other players in the lobby will be notified that the flagged AFK/Leaver player will receive less LP over their next several games. If a player would exceed 100 LP, but would fall back below 100 LP after the penalty is applied, they do not promote.
                    </li>
                    <li>
                        Fixed a bug where Shyvana's W - Burnout would not apply the AP ratio for additional movement speed when in her dragon form.
                    </li>
                    <li>
                        Fixed a bug where Goredrinker and Ceaseless Hunger's Mythic Passive would not grant additional 5 ability haste for each Legendary item in the player's inventory.
                    </li>
                    <li>
                        Fixed a bug where an attack empowered by both Sheen and Essence Reaver would not grant mana back from Essence Reaver.
                    </li>
                    <li>
                        Items that do damage to enemies can now properly trigger the execute from The Collector.
                    </li>
                    <li>
                        The Collector's execute will now properly trigger on targets with Death's Dance.
                    </li>
                    <li>
                        Eclipse and Syzygy's omnivamp will now properly work even after being upgraded by Ornn's Passive - Living Forge.
                    </li>
                    <li>
                        The SFX that plays when a player acquires a Dragon Soul will no longer replay if that player kills a Red Brambleback or Blue Sentinel.
                    </li>
                    <li>
                        The Dragon Soul VFX no longer disappears on death and reappears after the player kills a Red Brambleback or Blue Sentinel.
                    </li>
                    <li>
                        Imperial Mandate's Coordinate Fire passive now properly goes on cooldown for 6 seconds after on-champion slows and immobilizations
                    </li>
                    <li>
                        Fixed a bug where if Smite was used before jungle monsters spawned, the cooldown would be longer than intended
                    </li>
                    <li>
                        Gangplank has a new interface to upgrade his ultimate with Silver Serpents! Check it out while you're in base, since no one ever forgets to buy their upgrades.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PatchNotes;