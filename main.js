$(document).ready(function(){
    $content = '<td><table style="white-space: nowrap; width: 100%;"><tbody><tr><td><!--nstart--><b class="q5">Furkan Kubilay ın ToolTipi!</b><!--nend--><!--ndstart--><!--ndend--><span class="q"><br>Item Level <!--ilvl-->1995</span><br><!--bo-->Binds when picked up<table width="100%"><tbody><tr><td>Two-Hand</td><th><!--scstart2:10--><span class="q1">Staff</span><!--scend--></th></tr></tbody></table><table width="100%"><tbody><tr><td><span><!--dmg-->9999 - 9999 Damage</span></td><th>Speed <!--spd-->0.01</th></tr></tbody></table><!--dps-->(6.0 damage per second)<br><span><!--stat5-->+9999 Intellect</span><br><span><!--stat7-->+24 Stamina</span><!--ebstats--><br><span class="q2">+<!--rtg32-->12 Critical Strike</span><br><span class="q2">+<!--rtg36-->8 Haste</span><!--egstats--><!--eistats--><!--e--><!--ps--><br>Durability 145 / 145<div class="wowhead-tooltip-item-classes">Classes: <a href="/class=8" class="c8">Programmer</a></div></td></tr></tbody></table><table style="width: 100%;"><tbody><tr><td><span class="q2">Equip: <a href="/spell=28142" class="q2">Increases the spell critical strike of all party members within 30 yards by <!--pts1:0:0:28142:0.538:crm-->17<!---->.</a></span><br><span class="q2">Use: <a href="/spell=28148" class="q2">Creates a portal, teleporting group members that use it to Karazhan.</a> (1 Min Cooldown)</span><br>Requires Level <!--rlvl-->60<div class="whtt-sellprice">Sell Price: <span class="moneygold">16</span> <span class="moneysilver">82</span> <span class="moneycopper">71</span></div></td></tr></tbody></table></td>'
    $content2 = '<table"><tbody><tr><td><!--nstart--><b class="q7">Sovereign&#39;s Territory</b> <br> <!--nend--><!--ndstart--><!--ndend--><!--bo--><br><span class="q2" style="font-size:17px;"><!--rtg36-->Summoner tarafından çağrılan tüm Shadow Soldierların statlarını %50 arttırır</span><br> <br><div class="wowhead-tooltip-item-classes">Class: <a href="/class=8" class="c9">Necromancer</a></div></td></tr></tbody></table>'
    $content3 = '<table style="white-space: nowrap; width: 100%; font-size:22px;"><tbody><tr><td><!--nstart--><b class="q1">Shout of Provocation</b> <br> <!--nend--><!--ndstart--><!--ndend--><!--bo--><br><span class="q1"><!--rtg36-->Düşmanın kendisine saldırmasını sağlar.</span><br><span style="color:#ff0000;">Yüksek seviye düşmanlarda işe yaramaz.</span> <br><div class="wowhead-tooltip-item-classes">Class: <a href="/class=8" class="c8">Warrior</a></div></td></tr></tbody></table>'
    $content4 = '<span style="font-size:20px;"> Furkan Kubilay</span> <br> çok pis bağırıaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaabbbbb aaaaaaaarım'
    $('a.efsane').mouseover(function(event){
        $WowheadPower.showTooltip(event, $content, 'Inv_gizmo_thebiggerone')
    })
    $('a.efsane').mousemove(function(event){
        $WowheadPower.moveTooltip(event)
    })
    $('a.efsane').mouseout(function(){
        $WowheadPower.hideTooltip();
    })

    $('p.sovereignTero').mouseover(function(event){
        $WowheadPower.showTooltip(event, $content4, 'ability_warrior_battleshout')
    })
    $('p.sovereignTero').mousemove(function(event){
        $WowheadPower.moveTooltip(event)
    })
    $('p.sovereignTero').mouseout(function(){
        $WowheadPower.hideTooltip();
    })

    $('span.tauntTank').mouseover(function(event){
        $WowheadPower.showTooltip(event, $content2, 'ability_physical_taunt')
    })
    $('span.tauntTank').mousemove(function(event){
        $WowheadPower.moveTooltip(event)
    })
    $('span.tauntTank').mouseout(function(){
        $WowheadPower.hideTooltip();
    })
})