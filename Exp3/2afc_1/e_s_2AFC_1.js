/******************* 
 * E_S_2Afc_1 Test *
 *******************/

import { core, data, sound, util, visual } from './lib/psychojs-2022.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'e_s_2AFC_1';  // from the Builder filename that created this script
let expInfo = {'Prolific_ID': '', 'Age': '', 'Gender': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1,1,1]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(inf_agrmRoutineBegin());
flowScheduler.add(inf_agrmRoutineEachFrame());
flowScheduler.add(inf_agrmRoutineEnd());
flowScheduler.add(instr_trainingRoutineBegin());
flowScheduler.add(instr_trainingRoutineEachFrame());
flowScheduler.add(instr_trainingRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(instr_expRoutineBegin());
flowScheduler.add(instr_expRoutineEachFrame());
flowScheduler.add(instr_expRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
      {'name': 'stims_exp1.xlsx', 'path': 'resources/stims_exp1.xlsx'},
      {'name': 'states/abacus/e1_s1.jpg','path': 'states/abacus/e1_s1.jpg'},
{'name': 'states/accordion/e1_s2.jpg','path': 'states/accordion/e1_s2.jpg'},
{'name': 'states/altoid/e2_s1.jpg','path': 'states/altoid/e2_s1.jpg'},
{'name': 'states/apple/e2_s2.jpg','path': 'states/apple/e2_s2.jpg'},
{'name': 'states/backpack/e1_s1.jpg','path': 'states/backpack/e1_s1.jpg'},
{'name': 'states/balloon/e1_s2.jpg','path': 'states/balloon/e1_s2.jpg'},
{'name': 'states/baseball_glove/e2_s1.jpg','path': 'states/baseball_glove/e2_s1.jpg'},
{'name': 'states/batteries/e2_s2.jpg','path': 'states/batteries/e2_s2.jpg'},
{'name': 'states/bills/e1_s1.jpg','path': 'states/bills/e1_s1.jpg'},
{'name': 'states/book/e1_s2.jpg','path': 'states/book/e1_s2.jpg'},
{'name': 'states/book_object/e2_s1.jpg','path': 'states/book_object/e2_s1.jpg'},
{'name': 'states/boots/e2_s2.jpg','path': 'states/boots/e2_s2.jpg'},
{'name': 'states/bottle_liquid/e1_s1.jpg','path': 'states/bottle_liquid/e1_s1.jpg'},
{'name': 'states/bottle_perfume/e1_s2.jpg','path': 'states/bottle_perfume/e1_s2.jpg'},
{'name': 'states/box_cards/e2_s1.jpg','path': 'states/box_cards/e2_s1.jpg'},
{'name': 'states/box_hat/e2_s2.jpg','path': 'states/box_hat/e2_s2.jpg'},
{'name': 'states/box_screws/e1_s1.jpg','path': 'states/box_screws/e1_s1.jpg'},
{'name': 'states/breadbox/e1_s2.jpg','path': 'states/breadbox/e1_s2.jpg'},
{'name': 'states/bubbletea/e2_s1.jpg','path': 'states/bubbletea/e2_s1.jpg'},
{'name': 'states/cabbage/e2_s2.jpg','path': 'states/cabbage/e2_s2.jpg'},
{'name': 'states/cabinet/e1_s1.jpg','path': 'states/cabinet/e1_s1.jpg'},
{'name': 'states/canopener/e1_s2.jpg','path': 'states/canopener/e1_s2.jpg'},
{'name': 'states/car/e2_s1.jpg','path': 'states/car/e2_s1.jpg'},
{'name': 'states/cardbox/e2_s2.jpg','path': 'states/cardbox/e2_s2.jpg'},
{'name': 'states/cell/e1_s1.jpg','path': 'states/cell/e1_s1.jpg'},
{'name': 'states/chair_recliner/e1_s2.jpg','path': 'states/chair_recliner/e1_s2.jpg'},
{'name': 'states/chapstick/e2_s1.jpg','path': 'states/chapstick/e2_s1.jpg'},
{'name': 'states/chip/e2_s2.jpg','path': 'states/chip/e2_s2.jpg'},
{'name': 'states/chips/e1_s1.jpg','path': 'states/chips/e1_s1.jpg'},
{'name': 'states/chocolate/e1_s2.jpg','path': 'states/chocolate/e1_s2.jpg'},
{'name': 'states/clocks/e2_s1.jpg','path': 'states/clocks/e2_s1.jpg'},
{'name': 'states/cocktail_umbrella/e2_s2.jpg','path': 'states/cocktail_umbrella/e2_s2.jpg'},
{'name': 'states/coffeemug/e1_s1.jpg','path': 'states/coffeemug/e1_s1.jpg'},
{'name': 'states/coins/e1_s2.jpg','path': 'states/coins/e1_s2.jpg'},
{'name': 'states/computer/e2_s1.jpg','path': 'states/computer/e2_s1.jpg'},
{'name': 'states/container_open/e2_s2.jpg','path': 'states/container_open/e2_s2.jpg'},
{'name': 'states/cookie/e1_s1.jpg','path': 'states/cookie/e1_s1.jpg'},
{'name': 'states/cooking_pot/e1_s2.jpg','path': 'states/cooking_pot/e1_s2.jpg'},
{'name': 'states/copier/e2_s1.jpg','path': 'states/copier/e2_s1.jpg'},
{'name': 'states/corkscrew/e2_s2.jpg','path': 'states/corkscrew/e2_s2.jpg'},
{'name': 'states/couch/e1_s1.jpg','path': 'states/couch/e1_s1.jpg'},
{'name': 'states/dominos/e1_s2.jpg','path': 'states/dominos/e1_s2.jpg'},
{'name': 'states/donut/e2_s1.jpg','path': 'states/donut/e2_s1.jpg'},
{'name': 'states/dresser/e2_s2.jpg','path': 'states/dresser/e2_s2.jpg'},
{'name': 'states/drink/e1_s1.jpg','path': 'states/drink/e1_s1.jpg'},
{'name': 'states/dryer/e1_s2.jpg','path': 'states/dryer/e1_s2.jpg'},
{'name': 'states/ducky/e2_s1.jpg','path': 'states/ducky/e2_s1.jpg'},
{'name': 'states/file_box/e2_s2.jpg','path': 'states/file_box/e2_s2.jpg'},
{'name': 'states/file_folder/e1_s1.jpg','path': 'states/file_folder/e1_s1.jpg'},
{'name': 'states/flask/e1_s2.jpg','path': 'states/flask/e1_s2.jpg'},
{'name': 'states/fridge/e2_s1.jpg','path': 'states/fridge/e2_s1.jpg'},
{'name': 'states/garlic_press/e2_s2.jpg','path': 'states/garlic_press/e2_s2.jpg'},
{'name': 'states/gift_box/e1_s1.jpg','path': 'states/gift_box/e1_s1.jpg'},
{'name': 'states/glass_orange/e1_s2.jpg','path': 'states/glass_orange/e1_s2.jpg'},
{'name': 'states/gloves/e2_s1.jpg','path': 'states/gloves/e2_s1.jpg'},
{'name': 'states/hand_puppet/e2_s2.jpg','path': 'states/hand_puppet/e2_s2.jpg'},
{'name': 'states/headphone_small/e1_s1.jpg','path': 'states/headphone_small/e1_s1.jpg'},
{'name': 'states/hourglass/e1_s2.jpg','path': 'states/hourglass/e1_s2.jpg'},
{'name': 'states/kettle/e2_s1.jpg','path': 'states/kettle/e2_s1.jpg'},
{'name': 'states/keys/e2_s2.jpg','path': 'states/keys/e2_s2.jpg'},
{'name': 'states/key_ring/e1_s1.jpg','path': 'states/key_ring/e1_s1.jpg'},
{'name': 'states/laptop/e1_s2.jpg','path': 'states/laptop/e1_s2.jpg'},
{'name': 'states/leather_bag/e2_s1.jpg','path': 'states/leather_bag/e2_s1.jpg'},
{'name': 'states/lemon/e2_s2.jpg','path': 'states/lemon/e2_s2.jpg'},
{'name': 'states/locks/e1_s1.jpg','path': 'states/locks/e1_s1.jpg'},
{'name': 'states/lotion/e1_s2.jpg','path': 'states/lotion/e1_s2.jpg'},
{'name': 'states/lottery_ticket/e2_s1.jpg','path': 'states/lottery_ticket/e2_s1.jpg'},
{'name': 'states/lunchbox/e2_s2.jpg','path': 'states/lunchbox/e2_s2.jpg'},
{'name': 'states/mailbox/e1_s1.jpg','path': 'states/mailbox/e1_s1.jpg'},
{'name': 'states/measuring_spoons/e1_s2.jpg','path': 'states/measuring_spoons/e1_s2.jpg'},
{'name': 'states/menorah/e2_s1.jpg','path': 'states/menorah/e2_s1.jpg'},
{'name': 'states/menus/e2_s2.jpg','path': 'states/menus/e2_s2.jpg'},
{'name': 'states/metronome/e1_s1.jpg','path': 'states/metronome/e1_s1.jpg'},
{'name': 'states/microwave/e1_s2.jpg','path': 'states/microwave/e1_s2.jpg'},
{'name': 'states/mixer/e2_s1.jpg','path': 'states/mixer/e2_s1.jpg'},
{'name': 'states/mustard/e2_s2.jpg','path': 'states/mustard/e2_s2.jpg'},
{'name': 'states/nailpolish/e1_s1.jpg','path': 'states/nailpolish/e1_s1.jpg'},
{'name': 'states/notebook/e1_s2.jpg','path': 'states/notebook/e1_s2.jpg'},
{'name': 'states/notecards/e2_s1.jpg','path': 'states/notecards/e2_s1.jpg'},
{'name': 'states/oj/e2_s2.jpg','path': 'states/oj/e2_s2.jpg'},
{'name': 'states/pail/e1_s1.jpg','path': 'states/pail/e1_s1.jpg'},
{'name': 'states/paper_cup/e1_s2.jpg','path': 'states/paper_cup/e1_s2.jpg'},
{'name': 'states/peanut_butter/e2_s1.jpg','path': 'states/peanut_butter/e2_s1.jpg'},
{'name': 'states/pen/e2_s2.jpg','path': 'states/pen/e2_s2.jpg'},
{'name': 'states/phone/e1_s1.jpg','path': 'states/phone/e1_s1.jpg'},
{'name': 'states/phone_antique/e1_s2.jpg','path': 'states/phone_antique/e1_s2.jpg'},
{'name': 'states/pie/e2_s1.jpg','path': 'states/pie/e2_s1.jpg'},
{'name': 'states/pizzaslice/e2_s2.jpg','path': 'states/pizzaslice/e2_s2.jpg'},
{'name': 'states/plastic_bottle/e1_s1.jpg','path': 'states/plastic_bottle/e1_s1.jpg'},
{'name': 'states/poker_chips/e1_s2.jpg','path': 'states/poker_chips/e1_s2.jpg'},
{'name': 'states/printer/e2_s1.jpg','path': 'states/printer/e2_s1.jpg'},
{'name': 'states/razor/e2_s2.jpg','path': 'states/razor/e2_s2.jpg'},
{'name': 'states/reeses/e1_s1.jpg','path': 'states/reeses/e1_s1.jpg'},
{'name': 'states/scanner/e1_s2.jpg','path': 'states/scanner/e1_s2.jpg'},
{'name': 'states/scissors/e2_s1.jpg','path': 'states/scissors/e2_s1.jpg'},
{'name': 'states/sharpie_pens/e2_s2.jpg','path': 'states/sharpie_pens/e2_s2.jpg'},
{'name': 'states/shoe/e1_s1.jpg','path': 'states/shoe/e1_s1.jpg'},
{'name': 'states/small_box/e1_s2.jpg','path': 'states/small_box/e1_s2.jpg'},
{'name': 'states/soap/e2_s1.jpg','path': 'states/soap/e2_s1.jpg'},
{'name': 'states/soup/e2_s2.jpg','path': 'states/soup/e2_s2.jpg'},
{'name': 'states/sponge/e1_s1.jpg','path': 'states/sponge/e1_s1.jpg'},
{'name': 'states/sugar_bowl/e1_s2.jpg','path': 'states/sugar_bowl/e1_s2.jpg'},
{'name': 'states/sugar_paper/e2_s1.jpg','path': 'states/sugar_paper/e2_s1.jpg'},
{'name': 'states/tape_dispenser/e2_s2.jpg','path': 'states/tape_dispenser/e2_s2.jpg'},
{'name': 'states/tea_pot/e1_s1.jpg','path': 'states/tea_pot/e1_s1.jpg'},
{'name': 'states/theater_seats/e1_s2.jpg','path': 'states/theater_seats/e1_s2.jpg'},
{'name': 'states/tictac/e2_s1.jpg','path': 'states/tictac/e2_s1.jpg'},
{'name': 'states/tissues/e2_s2.jpg','path': 'states/tissues/e2_s2.jpg'},
{'name': 'states/toilet/e1_s1.jpg','path': 'states/toilet/e1_s1.jpg'},
{'name': 'states/tool_box/e1_s2.jpg','path': 'states/tool_box/e1_s2.jpg'},
{'name': 'states/towel/e2_s1.jpg','path': 'states/towel/e2_s1.jpg'},
{'name': 'states/toy_truck/e2_s2.jpg','path': 'states/toy_truck/e2_s2.jpg'},
{'name': 'states/tricycle/e1_s1.jpg','path': 'states/tricycle/e1_s1.jpg'},
{'name': 'states/trunk/e1_s2.jpg','path': 'states/trunk/e1_s2.jpg'},
{'name': 'states/typewriter/e2_s1.jpg','path': 'states/typewriter/e2_s1.jpg'},
{'name': 'states/umbrella/e2_s2.jpg','path': 'states/umbrella/e2_s2.jpg'},
{'name': 'states/usb_key/e1_s1.jpg','path': 'states/usb_key/e1_s1.jpg'},
{'name': 'states/wallet/e1_s2.jpg','path': 'states/wallet/e1_s2.jpg'},
{'name': 'states/watch/e2_s1.jpg','path': 'states/watch/e2_s1.jpg'},
{'name': 'states/yarn/e2_s2.jpg','path': 'states/yarn/e2_s2.jpg'},
{'name': 'states/abacus/e1_s2.jpg','path': 'states/abacus/e1_s2.jpg'},
{'name': 'states/accordion/e1_s1.jpg','path': 'states/accordion/e1_s1.jpg'},
{'name': 'states/altoid/e2_s2.jpg','path': 'states/altoid/e2_s2.jpg'},
{'name': 'states/apple/e2_s1.jpg','path': 'states/apple/e2_s1.jpg'},
{'name': 'states/backpack/e1_s2.jpg','path': 'states/backpack/e1_s2.jpg'},
{'name': 'states/balloon/e1_s1.jpg','path': 'states/balloon/e1_s1.jpg'},
{'name': 'states/baseball_glove/e2_s2.jpg','path': 'states/baseball_glove/e2_s2.jpg'},
{'name': 'states/batteries/e2_s1.jpg','path': 'states/batteries/e2_s1.jpg'},
{'name': 'states/bills/e1_s2.jpg','path': 'states/bills/e1_s2.jpg'},
{'name': 'states/book/e1_s1.jpg','path': 'states/book/e1_s1.jpg'},
{'name': 'states/book_object/e2_s2.jpg','path': 'states/book_object/e2_s2.jpg'},
{'name': 'states/boots/e2_s1.jpg','path': 'states/boots/e2_s1.jpg'},
{'name': 'states/bottle_liquid/e1_s2.jpg','path': 'states/bottle_liquid/e1_s2.jpg'},
{'name': 'states/bottle_perfume/e1_s1.jpg','path': 'states/bottle_perfume/e1_s1.jpg'},
{'name': 'states/box_cards/e2_s2.jpg','path': 'states/box_cards/e2_s2.jpg'},
{'name': 'states/box_hat/e2_s1.jpg','path': 'states/box_hat/e2_s1.jpg'},
{'name': 'states/box_screws/e1_s2.jpg','path': 'states/box_screws/e1_s2.jpg'},
{'name': 'states/breadbox/e1_s1.jpg','path': 'states/breadbox/e1_s1.jpg'},
{'name': 'states/bubbletea/e2_s2.jpg','path': 'states/bubbletea/e2_s2.jpg'},
{'name': 'states/cabbage/e2_s1.jpg','path': 'states/cabbage/e2_s1.jpg'},
{'name': 'states/cabinet/e1_s2.jpg','path': 'states/cabinet/e1_s2.jpg'},
{'name': 'states/canopener/e1_s1.jpg','path': 'states/canopener/e1_s1.jpg'},
{'name': 'states/car/e2_s2.jpg','path': 'states/car/e2_s2.jpg'},
{'name': 'states/cardbox/e2_s1.jpg','path': 'states/cardbox/e2_s1.jpg'},
{'name': 'states/cell/e1_s2.jpg','path': 'states/cell/e1_s2.jpg'},
{'name': 'states/chair_recliner/e1_s1.jpg','path': 'states/chair_recliner/e1_s1.jpg'},
{'name': 'states/chapstick/e2_s2.jpg','path': 'states/chapstick/e2_s2.jpg'},
{'name': 'states/chip/e2_s1.jpg','path': 'states/chip/e2_s1.jpg'},
{'name': 'states/chips/e1_s2.jpg','path': 'states/chips/e1_s2.jpg'},
{'name': 'states/chocolate/e1_s1.jpg','path': 'states/chocolate/e1_s1.jpg'},
{'name': 'states/clocks/e2_s2.jpg','path': 'states/clocks/e2_s2.jpg'},
{'name': 'states/cocktail_umbrella/e2_s1.jpg','path': 'states/cocktail_umbrella/e2_s1.jpg'},
{'name': 'states/coffeemug/e1_s2.jpg','path': 'states/coffeemug/e1_s2.jpg'},
{'name': 'states/coins/e1_s1.jpg','path': 'states/coins/e1_s1.jpg'},
{'name': 'states/computer/e2_s2.jpg','path': 'states/computer/e2_s2.jpg'},
{'name': 'states/container_open/e2_s1.jpg','path': 'states/container_open/e2_s1.jpg'},
{'name': 'states/cookie/e1_s2.jpg','path': 'states/cookie/e1_s2.jpg'},
{'name': 'states/cooking_pot/e1_s1.jpg','path': 'states/cooking_pot/e1_s1.jpg'},
{'name': 'states/copier/e2_s2.jpg','path': 'states/copier/e2_s2.jpg'},
{'name': 'states/corkscrew/e2_s1.jpg','path': 'states/corkscrew/e2_s1.jpg'},
{'name': 'states/couch/e2_s1.jpg','path': 'states/couch/e2_s1.jpg'},
{'name': 'states/dominos/e2_s2.jpg','path': 'states/dominos/e2_s2.jpg'},
{'name': 'states/donut/e1_s1.jpg','path': 'states/donut/e1_s1.jpg'},
{'name': 'states/dresser/e1_s2.jpg','path': 'states/dresser/e1_s2.jpg'},
{'name': 'states/drink/e2_s1.jpg','path': 'states/drink/e2_s1.jpg'},
{'name': 'states/dryer/e2_s2.jpg','path': 'states/dryer/e2_s2.jpg'},
{'name': 'states/ducky/e1_s1.jpg','path': 'states/ducky/e1_s1.jpg'},
{'name': 'states/file_box/e1_s2.jpg','path': 'states/file_box/e1_s2.jpg'},
{'name': 'states/file_folder/e2_s1.jpg','path': 'states/file_folder/e2_s1.jpg'},
{'name': 'states/flask/e2_s2.jpg','path': 'states/flask/e2_s2.jpg'},
{'name': 'states/fridge/e1_s1.jpg','path': 'states/fridge/e1_s1.jpg'},
{'name': 'states/garlic_press/e1_s2.jpg','path': 'states/garlic_press/e1_s2.jpg'},
{'name': 'states/gift_box/e2_s1.jpg','path': 'states/gift_box/e2_s1.jpg'},
{'name': 'states/glass_orange/e2_s2.jpg','path': 'states/glass_orange/e2_s2.jpg'},
{'name': 'states/gloves/e1_s1.jpg','path': 'states/gloves/e1_s1.jpg'},
{'name': 'states/hand_puppet/e1_s2.jpg','path': 'states/hand_puppet/e1_s2.jpg'},
{'name': 'states/headphone_small/e2_s1.jpg','path': 'states/headphone_small/e2_s1.jpg'},
{'name': 'states/hourglass/e2_s2.jpg','path': 'states/hourglass/e2_s2.jpg'},
{'name': 'states/kettle/e1_s1.jpg','path': 'states/kettle/e1_s1.jpg'},
{'name': 'states/keys/e1_s2.jpg','path': 'states/keys/e1_s2.jpg'},
{'name': 'states/key_ring/e2_s1.jpg','path': 'states/key_ring/e2_s1.jpg'},
{'name': 'states/laptop/e2_s2.jpg','path': 'states/laptop/e2_s2.jpg'},
{'name': 'states/leather_bag/e1_s1.jpg','path': 'states/leather_bag/e1_s1.jpg'},
{'name': 'states/lemon/e1_s2.jpg','path': 'states/lemon/e1_s2.jpg'},
{'name': 'states/locks/e2_s1.jpg','path': 'states/locks/e2_s1.jpg'},
{'name': 'states/lotion/e2_s2.jpg','path': 'states/lotion/e2_s2.jpg'},
{'name': 'states/lottery_ticket/e1_s1.jpg','path': 'states/lottery_ticket/e1_s1.jpg'},
{'name': 'states/lunchbox/e1_s2.jpg','path': 'states/lunchbox/e1_s2.jpg'},
{'name': 'states/mailbox/e2_s1.jpg','path': 'states/mailbox/e2_s1.jpg'},
{'name': 'states/measuring_spoons/e2_s2.jpg','path': 'states/measuring_spoons/e2_s2.jpg'},
{'name': 'states/menorah/e1_s1.jpg','path': 'states/menorah/e1_s1.jpg'},
{'name': 'states/menus/e1_s2.jpg','path': 'states/menus/e1_s2.jpg'},
{'name': 'states/metronome/e2_s1.jpg','path': 'states/metronome/e2_s1.jpg'},
{'name': 'states/microwave/e2_s2.jpg','path': 'states/microwave/e2_s2.jpg'},
{'name': 'states/mixer/e1_s1.jpg','path': 'states/mixer/e1_s1.jpg'},
{'name': 'states/mustard/e1_s2.jpg','path': 'states/mustard/e1_s2.jpg'},
{'name': 'states/nailpolish/e2_s1.jpg','path': 'states/nailpolish/e2_s1.jpg'},
{'name': 'states/notebook/e2_s2.jpg','path': 'states/notebook/e2_s2.jpg'},
{'name': 'states/notecards/e1_s1.jpg','path': 'states/notecards/e1_s1.jpg'},
{'name': 'states/oj/e1_s2.jpg','path': 'states/oj/e1_s2.jpg'},
{'name': 'states/pail/e2_s2.jpg','path': 'states/pail/e2_s2.jpg'},
{'name': 'states/paper_cup/e2_s1.jpg','path': 'states/paper_cup/e2_s1.jpg'},
{'name': 'states/peanut_butter/e1_s2.jpg','path': 'states/peanut_butter/e1_s2.jpg'},
{'name': 'states/pen/e1_s1.jpg','path': 'states/pen/e1_s1.jpg'},
{'name': 'states/phone/e2_s2.jpg','path': 'states/phone/e2_s2.jpg'},
{'name': 'states/phone_antique/e2_s1.jpg','path': 'states/phone_antique/e2_s1.jpg'},
{'name': 'states/pie/e1_s2.jpg','path': 'states/pie/e1_s2.jpg'},
{'name': 'states/pizzaslice/e1_s1.jpg','path': 'states/pizzaslice/e1_s1.jpg'},
{'name': 'states/plastic_bottle/e2_s2.jpg','path': 'states/plastic_bottle/e2_s2.jpg'},
{'name': 'states/poker_chips/e2_s1.jpg','path': 'states/poker_chips/e2_s1.jpg'},
{'name': 'states/printer/e1_s2.jpg','path': 'states/printer/e1_s2.jpg'},
{'name': 'states/razor/e1_s1.jpg','path': 'states/razor/e1_s1.jpg'},
{'name': 'states/reeses/e2_s2.jpg','path': 'states/reeses/e2_s2.jpg'},
{'name': 'states/scanner/e2_s1.jpg','path': 'states/scanner/e2_s1.jpg'},
{'name': 'states/scissors/e1_s2.jpg','path': 'states/scissors/e1_s2.jpg'},
{'name': 'states/sharpie_pens/e1_s1.jpg','path': 'states/sharpie_pens/e1_s1.jpg'},
{'name': 'states/shoe/e2_s2.jpg','path': 'states/shoe/e2_s2.jpg'},
{'name': 'states/small_box/e2_s1.jpg','path': 'states/small_box/e2_s1.jpg'},
{'name': 'states/soap/e1_s2.jpg','path': 'states/soap/e1_s2.jpg'},
{'name': 'states/soup/e1_s1.jpg','path': 'states/soup/e1_s1.jpg'},
{'name': 'states/sponge/e2_s2.jpg','path': 'states/sponge/e2_s2.jpg'},
{'name': 'states/sugar_bowl/e2_s1.jpg','path': 'states/sugar_bowl/e2_s1.jpg'},
{'name': 'states/sugar_paper/e1_s2.jpg','path': 'states/sugar_paper/e1_s2.jpg'},
{'name': 'states/tape_dispenser/e1_s1.jpg','path': 'states/tape_dispenser/e1_s1.jpg'},
{'name': 'states/tea_pot/e2_s2.jpg','path': 'states/tea_pot/e2_s2.jpg'},
{'name': 'states/theater_seats/e2_s1.jpg','path': 'states/theater_seats/e2_s1.jpg'},
{'name': 'states/tictac/e1_s2.jpg','path': 'states/tictac/e1_s2.jpg'},
{'name': 'states/tissues/e1_s1.jpg','path': 'states/tissues/e1_s1.jpg'},
{'name': 'states/toilet/e2_s2.jpg','path': 'states/toilet/e2_s2.jpg'},
{'name': 'states/tool_box/e2_s1.jpg','path': 'states/tool_box/e2_s1.jpg'},
{'name': 'states/towel/e1_s2.jpg','path': 'states/towel/e1_s2.jpg'},
{'name': 'states/toy_truck/e1_s1.jpg','path': 'states/toy_truck/e1_s1.jpg'},
{'name': 'states/tricycle/e2_s2.jpg','path': 'states/tricycle/e2_s2.jpg'},
{'name': 'states/trunk/e2_s1.jpg','path': 'states/trunk/e2_s1.jpg'},
{'name': 'states/typewriter/e1_s2.jpg','path': 'states/typewriter/e1_s2.jpg'},
{'name': 'states/umbrella/e1_s1.jpg','path': 'states/umbrella/e1_s1.jpg'},
{'name': 'states/usb_key/e2_s2.jpg','path': 'states/usb_key/e2_s2.jpg'},
{'name': 'states/wallet/e2_s1.jpg','path': 'states/wallet/e2_s1.jpg'},
{'name': 'states/watch/e1_s2.jpg','path': 'states/watch/e1_s2.jpg'},
{'name': 'states/yarn/e1_s1.jpg','path': 'states/yarn/e1_s1.jpg'}
      ]
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

var frameDur;

async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.1.3';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["Prolific_ID"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=C1EGE3LS', '');
  return Scheduler.Event.NEXT;
}

async function shuffle(array) {
   for (var i = array.length - 1; i > 0; i--) {
   
       // Generate random number
       var j = Math.floor(Math.random() * (i + 1));
                   
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
       
   return array;
}

async function randomInt(lower, upper){
  var rand = lower - 0.5 + Math.random() * (upper - lower + 1);
  return Math.round(rand);
}

var inf_agrmClock;
var text_agrm;
var key_resp;
var instr_trainingClock;
var instr_tr;
var mouse_2;
var trainingClock;
var stim1;
var stim2;
var stim_1;
var stim_2;
var mouse_3;
var pos;
var pos1;
var pos2;
var text;
var instr_expClock;
var instr_ex;
var expClock;
var mouse;
var exp_feedbackClock;
var feedback_text;
var endClock;
var end_text;
var mouse_5;
var globalClock;
var routineTimer;
var message;

pos = [[-0.25, 0],[0.25, 0]];
pos1 = [];
pos2 = [];



async function experimentInit() {
  // Initialize components for Routine "inf_agrm"
  inf_agrmClock = new util.Clock();
  text_agrm = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_agrm',
    text: 'CONSENT\nThe following information is provided to inform you about the research project and your participation in it. Please read this form carefully and feel free to ask any questions you may have about this study and the information given below. You will be given an opportunity to ask questions, and your questions will be answered. Also, you will be given a copy of this consent form. Your participation in this research study is voluntary. You are also free to withdraw from this study at any time. In the event new information becomes available that may affect the risks or benefits associated with this research study or your willingness to participate in it, you will be notified so that you can make an informed decision whether or not to continue your participation in this study.\nPurpose of the study: You are being asked to participate in a research study because we are trying to understand how the brain constructs rich, detailed internal representations of the visual world that surrounds us. One of the problems that we are interested in is how detailed the information that our long-term memory stores about everyday objects and how it recovers that information at recall. Therefore, you will perform a task in which you will be asked to remember pictures on a screen and later we will test your memory for those pictures. Due to the subject nature, some images could cause discomfort. Your data will help us build models of long-term memory and forgetting with clear real-world applications to issues as wide-ranging as eyewitness testimony and improving classroom performance. Compensation will be offered for this study.\nProcedures to be followed and approximate duration of the study: You will be first shown a set of images, one at a time, that you need to memorize. After the set presentation, your memory will be tested. In that test, you will be shown several items at a time and you will have to to choose one that you had seen before. You can choose it by mouse clicking on the image. The approximate duration of the entire experiment will be 10-15 minutes. The approximate duration of the entire experiment will be 12-15 minutes. Your data will be kept for approximately 7 years following publication of the study. However, your data will be stored confidentially and assigned an arbitrary number code (e.g., A03).\nExpected costs:\nThere are no costs associated with this study.\nDescription of the discomforts, inconveniences, and/or risks that can be reasonably expected as a result of participation in this study:\nThe experiments entail no known risk and no deception is involved at all. The research does not involve stress. Many subjects like yourself consider these tasks to be like video games. Thousands and thousands of people like yourself have participated in these types of tasks in labs across the world, and the only discomfort or inconvenience you may experience includes tediousness, boredom, or slight eye strain.\nUnforeseeable risks:\nThere are no foreseeable risks involved with the study.\nAnticipated benefits from this study:\na) The potential benefits to science and humankind that may result from this study are that results of your participation provide valuable information that advances our understanding of how the brain allows people to see.\nb) The potential benefits to you from this study is the educational benefit of understanding how your brain allows you to see, and how experiments are conducted to learn about behavior.\nBy pressing SPACE, you are indicating that you are at least 18 years old, have read this consent form and agree to participate in this research study. Otherwise, press Escape',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "instr_training"
  instr_trainingClock = new util.Clock();
  instr_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_tr',
    text: 'Thank you for participating!\nIt will take you no more than 15 minutes to complete the task.\nPlease turn off notifications on all devices that may disturb you.\n\nThere are 2 parts of the experiment:\nIn the first part, you need to remember all the presented images.\nIn the second part, you must select from images on the screen the one that was shown earlier (in the first part).\n\nIf you are ready to run the first part of the experiment click the mouse button.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "training"
  trainingClock = new util.Clock();
  stim1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "instr_exp"
  instr_expClock = new util.Clock();
  instr_ex = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_ex',
    text: 'In the second part of the experiment, you must select from images on the screen the one that was shown earlier in the first part. \n\nIf you are ready to run the second part of the experiment click the mouse button.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "exp"
  expClock = new util.Clock();
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  stim_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  stim_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "exp_feedback"
  exp_feedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Thank you for participating in the experiment!\n\nClick the mouse button to exit.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var continueRoutine;
var gotValidClick;
var instr_trainingComponents;
var trainingComponents;

var _key_resp_allKeys;
var inf_agrmComponents;

function inf_agrmRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'inf_agrm'-------
    t = 0;
    inf_agrmClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    inf_agrmComponents = [];
    inf_agrmComponents.push(text_agrm);
    inf_agrmComponents.push(key_resp);
    
    for (const thisComponent of inf_agrmComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function inf_agrmRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'inf_agrm'-------
    // get current time
    t = inf_agrmClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_agrm* updates
    if (t >= 0.0 && text_agrm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_agrm.tStart = t;  // (not accounting for frame time here)
      text_agrm.frameNStart = frameN;  // exact frame index
      
      text_agrm.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inf_agrmComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function inf_agrmRoutineEnd() {
  return async function () {
    //------Ending Routine 'inf_agrm'-------
    for (const thisComponent of inf_agrmComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "inf_agrm" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function instr_trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instr_training'-------
    t = 0;
    instr_trainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instr_trainingComponents = [];
    instr_trainingComponents.push(instr_tr);
    instr_trainingComponents.push(mouse_2);
    
    for (const thisComponent of instr_trainingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

var prevButtonState;
var _mouseButtons;

function instr_trainingRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instr_training'-------
    // get current time
    t = instr_trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_tr* updates
    if (t >= 0.0 && instr_tr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_tr.tStart = t;  // (not accounting for frame time here)
      instr_tr.frameNStart = frameN;  // exact frame index
      
      instr_tr.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_trainingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

var trials_2;
var trials;
var currentLoop;
var frameRemains;

function instr_trainingRoutineEnd() {
  return async function () {
    //------Ending Routine 'instr_training'-------
    for (const thisComponent of instr_trainingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instr_training" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stims_exp1.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trainingRoutineBegin(snapshot));
      trialsLoopScheduler.add(trainingRoutineEachFrame());
      trialsLoopScheduler.add(trainingRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stims_exp1.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      const snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(expRoutineBegin(snapshot));
      trials_2LoopScheduler.add(expRoutineEachFrame());
      trials_2LoopScheduler.add(expRoutineEnd());
      trials_2LoopScheduler.add(exp_feedbackRoutineBegin(snapshot));
      trials_2LoopScheduler.add(exp_feedbackRoutineEachFrame());
      trials_2LoopScheduler.add(exp_feedbackRoutineEnd());
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}

function trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'training'-------
    t = 0;
    trainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.window.mouseVisible = false;
    
    stim1.setImage(stimulus1);
    // keep track of which components have finished
    trainingComponents = [];
    trainingComponents.push(stim1);
    trainingComponents.push(text);
    
    for (const thisComponent of trainingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function trainingRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'training'-------
    // get current time
    t = trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim1* updates
    if (t >= 0.0 && stim1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1.tStart = t;  // (not accounting for frame time here)
      stim1.frameNStart = frameN;  // exact frame index
      
      stim1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim1.setAutoDraw(false);
    }
    
    // *text* updates
    if (t >= 1.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 1.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trainingRoutineEnd() {
  return async function () {
    //------Ending Routine 'training'-------
    for (const thisComponent of trainingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.window.mouseVisible = true;
    
    return Scheduler.Event.NEXT;
  };
}

var instr_expComponents;

function instr_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instr_exp'-------
    t = 0;
    instr_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instr_expComponents = [];
    instr_expComponents.push(instr_ex);
    instr_expComponents.push(mouse_3);
    
    for (const thisComponent of instr_expComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function instr_expRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instr_exp'-------
    // get current time
    t = instr_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_ex* updates
    if (t >= 0.0 && instr_ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_ex.tStart = t;  // (not accounting for frame time here)
      instr_ex.frameNStart = frameN;  // exact frame index
      
      instr_ex.setAutoDraw(true);
    }

    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_expComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instr_expRoutineEnd() {
  return async function () {
    //------Ending Routine 'instr_exp'-------
    for (const thisComponent of instr_expComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instr_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var expComponents;

function expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'exp'-------
    t = 0;
    expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    shuffle(pos);
    pos1 = pos[0];
    pos2 = pos[1];
    stim_1.setPos(pos1);
    stim_1.setImage(stimulus_1);
    stim_2.setPos(pos2);
    stim_2.setImage(foil);
    // keep track of which components have finished
    expComponents = [];
    expComponents.push(mouse);
    expComponents.push(stim_1);
    expComponents.push(stim_2);
    
    for (const thisComponent of expComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function expRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'exp'-------
    // get current time
    t = expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [stim_1, stim_2]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *stim_1* updates
    if (t >= 0.0 && stim_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_1.tStart = t;  // (not accounting for frame time here)
      stim_1.frameNStart = frameN;  // exact frame index
      
      stim_1.setAutoDraw(true);
    }

    
    // *stim_2* updates
    if (t >= 0.0 && stim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_2.tStart = t;  // (not accounting for frame time here)
      stim_2.frameNStart = frameN;  // exact frame index
      
      stim_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of expComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

var _mouseXYs;
var _mouseButtons;

function expRoutineEnd() {
  return async function () {
    //------Ending Routine 'exp'-------
    for (const thisComponent of expComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    if (mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0]);}
    // the Routine "exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var exp_feedbackComponents;
var feed_back_col;

function exp_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'exp_feedback'-------
    t = 0;
    exp_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    if (mouse.isPressedIn(stim_1)) {
        message = 'Correct'
        feed_back_col = 'green' 
    } else {
        message = 'Incorrect'
        feed_back_col = 'red'
    }
    feedback_text.setColor(new util.Color(feed_back_col));
    feedback_text.setText(message);
    // keep track of which components have finished
    exp_feedbackComponents = [];
    exp_feedbackComponents.push(feedback_text);
    
    for (const thisComponent of exp_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function exp_feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'exp_feedback'-------
    // get current time
    t = exp_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function exp_feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'exp_feedback'-------
    for (const thisComponent of exp_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}

var endComponents;

function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_5
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    endComponents.push(mouse_5);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function endRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end'-------
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    // *mouse_5* updates
    if (t >= 1.5 && mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_5.tStart = t;  // (not accounting for frame time here)
      mouse_5.frameNStart = frameN;  // exact frame index
      
      mouse_5.status = PsychoJS.Status.STARTED;
      mouse_5.mouseClock.reset();
      prevButtonState = mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function endRoutineEnd() {
  return async function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
