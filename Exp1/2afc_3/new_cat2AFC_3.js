/********************** 
 * New_Cat2Afc_3 Test *
 **********************/

import { core, data, sound, util, visual } from './lib/psychojs-2022.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'new_cat2AFC_3';  // from the Builder filename that created this script
let expInfo = {'Prolific_ID': '', 'Age': '', 'Gender': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0000, 1.0000, 1.0000]),
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
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(instr_expRoutineBegin());
flowScheduler.add(instr_expRoutineEachFrame());
flowScheduler.add(instr_expRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
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
      {'name': '2AFC_3.xlsx', 'path': 'resources/2AFC_3.xlsx'},
{'name': 'ab52.jpg','path': 'resources/ab52.jpg'},
{'name': 'AMUSICSTA.jpg','path': 'resources/AMUSICSTA.jpg'},
{'name': 'AFRAME138.jpg','path': 'resources/AFRAME138.jpg'},
{'name': 'swords_western_tizona_of_charles_v.jpg','path': 'resources/swords_western_tizona_of_charles_v.jpg'},
{'name': 'Straight_Shaft_Umbrellas.jpg','path': 'resources/Straight_Shaft_Umbrellas.jpg'},
{'name': '060350.jpg','path': 'resources/060350.jpg'},
{'name': 'O-CRT-DU_lrg.jpg','path': 'resources/O-CRT-DU_lrg.jpg'},
{'name': '040115_gadgets_razor_hmed10a.hmedium.jpg','path': 'resources/040115_gadgets_razor_hmed10a.hmedium.jpg'},
{'name': 'Ahorn21.jpg','path': 'resources/Ahorn21.jpg'},
{'name': '2000-4684_M.jpg','path': 'resources/2000-4684_M.jpg'},
{'name': '1078390905.jpg','path': 'resources/1078390905.jpg'},
{'name': 'cassette-tape-1.jpg','path': 'resources/cassette-tape-1.jpg'},
{'name': 'AFIREPLA2.jpg','path': 'resources/AFIREPLA2.jpg'},
{'name': 'shears2.jpg','path': 'resources/shears2.jpg'},
{'name': 'ehs.jpg','path': 'resources/ehs.jpg'},
{'name': 'babyant_1966_1034199.jpg','path': 'resources/babyant_1966_1034199.jpg'},
{'name': 'Sandwichww.jpg','path': 'resources/Sandwichww.jpg'},
{'name': 'saunders12530_RingBinder.jpg','path': 'resources/saunders12530_RingBinder.jpg'},
{'name': '9001.jpg','path': 'resources/9001.jpg'},
{'name': 'Aredapple5.jpg','path': 'resources/Aredapple5.jpg'},
{'name': 'tapir-stamp_31.jpg','path': 'resources/tapir-stamp_31.jpg'},
{'name': 'her9796.jpg','path': 'resources/her9796.jpg'},
{'name': 'APLANT6.jpg','path': 'resources/APLANT6.jpg'},
{'name': 'ADOLL169.jpg','path': 'resources/ADOLL169.jpg'},
{'name': '3D_Design_Toilet_Seat.jpg','path': 'resources/3D_Design_Toilet_Seat.jpg'},
{'name': 'ACOOKPO14.jpg','path': 'resources/ACOOKPO14.jpg'},
{'name': 'APIESERV3.jpg','path': 'resources/APIESERV3.jpg'},
{'name': 'tienew07.jpg','path': 'resources/tienew07.jpg'},
{'name': 'B00005OONH.01.LZZZZZZZ.jpg','path': 'resources/B00005OONH.01.LZZZZZZZ.jpg'},
{'name': 'AWSHOES4.jpg','path': 'resources/AWSHOES4.jpg'},
{'name': 'AFISHLU5.jpg','path': 'resources/AFISHLU5.jpg'},
{'name': 'PY2H1461.jpg','path': 'resources/PY2H1461.jpg'},
{'name': 'T3AM07.jpg','path': 'resources/T3AM07.jpg'},
{'name': 'tc1050b_500pix.jpg','path': 'resources/tc1050b_500pix.jpg'},
{'name': 'images-4898.jpg','path': 'resources/images-4898.jpg'},
{'name': 'M4791.jpg','path': 'resources/M4791.jpg'},
{'name': '712_toothbrush.jpg','path': 'resources/712_toothbrush.jpg'},
{'name': 'Abackpack31.jpg','path': 'resources/Abackpack31.jpg'},
{'name': 'Amanualfan16.jpg','path': 'resources/Amanualfan16.jpg'},
{'name': 'DSC00961.JPG','path': 'resources/DSC00961.JPG'},
{'name': 'Alunchbox115.jpg','path': 'resources/Alunchbox115.jpg'},
{'name': 'Awickerbask21.jpg','path': 'resources/Awickerbask21.jpg'},
{'name': '41AWBNXQRML._AA262_.jpg','path': 'resources/41AWBNXQRML._AA262_.jpg'},
{'name': 'small lilliput robot.jpg','path': 'resources/small lilliput robot.jpg'},
{'name': 'ADOG61.jpg','path': 'resources/ADOG61.jpg'},
{'name': 'Cherry-Pie.jpg','path': 'resources/Cherry-Pie.jpg'},
{'name': 'a00e7dbe-acad-41ed-b95d-6b5ffbbe4c9a_300.jpg','path': 'resources/a00e7dbe-acad-41ed-b95d-6b5ffbbe4c9a_300.jpg'},
{'name': 'ROMSL1374.jpg','path': 'resources/ROMSL1374.jpg'},
{'name': '7264122_ra.jpg','path': 'resources/7264122_ra.jpg'},
{'name': 'AGLOBE8.jpg','path': 'resources/AGLOBE8.jpg'},
{'name': 'l_640045_s05_000.jpg','path': 'resources/l_640045_s05_000.jpg'},
{'name': 'replacementbulb2.jpg','path': 'resources/replacementbulb2.jpg'},
{'name': 'Brass scales uid.jpg','path': 'resources/Brass scales uid.jpg'},
{'name': 'b2c_l_scd6550.jpg','path': 'resources/b2c_l_scd6550.jpg'},
{'name': 'Multimedia_Speakers.jpg','path': 'resources/Multimedia_Speakers.jpg'},
{'name': '1383_1749_popup copy.jpg','path': 'resources/1383_1749_popup copy.jpg'},
{'name': '042_0013.jpg','path': 'resources/042_0013.jpg'},
{'name': 'ATYPEWR46.jpg','path': 'resources/ATYPEWR46.jpg'},
{'name': 'Abird22.jpg','path': 'resources/Abird22.jpg'},
{'name': '79398-3-1-99.77F-K75-5-0013_320x320.jpg','path': 'resources/79398-3-1-99.77F-K75-5-0013_320x320.jpg'},
{'name': '009.-trashcan_lrg.jpg','path': 'resources/009.-trashcan_lrg.jpg'},
{'name': 'AMOTH28.jpg','path': 'resources/AMOTH28.jpg'},
{'name': 'Aclock282.jpg','path': 'resources/Aclock282.jpg'},
{'name': '230397853.jpg','path': 'resources/230397853.jpg'},
{'name': 'necklascenew04.jpg','path': 'resources/necklascenew04.jpg'},
{'name': 'boucles_d_oreilles_bonchd_0203.jpg','path': 'resources/boucles_d_oreilles_bonchd_0203.jpg'},
{'name': 'APACKME32.jpg','path': 'resources/APACKME32.jpg'},
{'name': '091106micdroshred.jpg','path': 'resources/091106micdroshred.jpg'},
{'name': '269-200613-_DSC0873.jpg','path': 'resources/269-200613-_DSC0873.jpg'},
{'name': 'Apex_pcb.jpg','path': 'resources/Apex_pcb.jpg'},
{'name': 'single flap.jpg','path': 'resources/single flap.jpg'},
{'name': 'popmech2.jpg','path': 'resources/popmech2.jpg'},
{'name': 'AREDCOUC5.jpg','path': 'resources/AREDCOUC5.jpg'},
{'name': 'AWIG73.jpg','path': 'resources/AWIG73.jpg'},
{'name': 'AROCK9.jpg','path': 'resources/AROCK9.jpg'},
{'name': 'Amateur_ice_hockey_skates.jpg','path': 'resources/Amateur_ice_hockey_skates.jpg'},
{'name': 'BROOM.jpg','path': 'resources/BROOM.jpg'},
{'name': 'perfume5-b.jpg','path': 'resources/perfume5-b.jpg'},
{'name': '51wbushUphL._AA262_.jpg','path': 'resources/51wbushUphL._AA262_.jpg'},
{'name': 'Abikini5.jpg','path': 'resources/Abikini5.jpg'},
{'name': 'logitech-dinovo-edge.jpg','path': 'resources/logitech-dinovo-edge.jpg'},
{'name': 'ALAMP19.jpg','path': 'resources/ALAMP19.jpg'},
{'name': 'joy011.jpg','path': 'resources/joy011.jpg'},
{'name': 'ACHEESGR4.jpg','path': 'resources/ACHEESGR4.jpg'},
{'name': 'ATRACTOR6.jpg','path': 'resources/ATRACTOR6.jpg'},
{'name': 'francisfrancisx1-coffee-maker.jpg','path': 'resources/francisfrancisx1-coffee-maker.jpg'},
{'name': 'candy 66.jpg','path': 'resources/candy 66.jpg'},
{'name': 'exact.jpg','path': 'resources/exact.jpg'},
{'name': 'potatochips2.jpg','path': 'resources/potatochips2.jpg'},
{'name': 'ALEI16.jpg','path': 'resources/ALEI16.jpg'},
{'name': '3ce51135-ecf8-4172-82d1-528e7fe6edf6_300.jpg','path': 'resources/3ce51135-ecf8-4172-82d1-528e7fe6edf6_300.jpg'},
{'name': 'Spout_bottle_opener.jpg','path': 'resources/Spout_bottle_opener.jpg'},
{'name': 'ABOWARRO4.jpg','path': 'resources/ABOWARRO4.jpg'},
{'name': '7424557_sa.jpg','path': 'resources/7424557_sa.jpg'},
{'name': 'ABINOCU53.jpg','path': 'resources/ABINOCU53.jpg'},
{'name': 'folding_bike_dahon.jpg','path': 'resources/folding_bike_dahon.jpg'},
{'name': '26461874.thl.jpg','path': 'resources/26461874.thl.jpg'},
{'name': '132005.jpg','path': 'resources/132005.jpg'},
{'name': 'CashRegister.jpg','path': 'resources/CashRegister.jpg'},
{'name': 'Agardeninghoe.jpg','path': 'resources/Agardeninghoe.jpg'},
{'name': 'parfait.jpg','path': 'resources/parfait.jpg'},
{'name': 'SleepingCherubOnShell32004.jpg','path': 'resources/SleepingCherubOnShell32004.jpg'},
{'name': '1975hunter.jpg','path': 'resources/1975hunter.jpg'},
{'name': 'Avase106.jpg','path': 'resources/Avase106.jpg'},
{'name': 'SimplyChickHeadband32.jpg','path': 'resources/SimplyChickHeadband32.jpg'},
{'name': 'Salt_Pepper_Mills_Sets.jpg','path': 'resources/Salt_Pepper_Mills_Sets.jpg'},
{'name': 'ALIGHTE24.jpg','path': 'resources/ALIGHTE24.jpg'},
{'name': 'hammernew03.jpg','path': 'resources/hammernew03.jpg'},
{'name': 'ocadia11if.jpg','path': 'resources/ocadia11if.jpg'},
{'name': 'folding_screens_retablo_d.jpg','path': 'resources/folding_screens_retablo_d.jpg'},
{'name': 'coffre 2.jpg','path': 'resources/coffre 2.jpg'},
{'name': 'p_NOR8121.jpg','path': 'resources/p_NOR8121.jpg'},
{'name': 'ABELGFLAG.jpg','path': 'resources/ABELGFLAG.jpg'},
{'name': 'Ultra-Short-pacific-blue400.jpg','path': 'resources/Ultra-Short-pacific-blue400.jpg'},
{'name': 'AEARPHON6.jpg','path': 'resources/AEARPHON6.jpg'},
{'name': '41XJB9YZ93L._SS384_.jpg','path': 'resources/41XJB9YZ93L._SS384_.jpg'},
{'name': 'Aroadsignin16.jpg','path': 'resources/Aroadsignin16.jpg'},
{'name': 'caddycaddy.jpg','path': 'resources/caddycaddy.jpg'},
{'name': 'a7b18beb-0ddd-4970-8618-53ccccd5950b_300.jpg','path': 'resources/a7b18beb-0ddd-4970-8618-53ccccd5950b_300.jpg'},
{'name': '209170485_34857e863d_o.jpg','path': 'resources/209170485_34857e863d_o.jpg'},
{'name': 'sushi_narrowweb__300x357,0.jpg','path': 'resources/sushi_narrowweb__300x357,0.jpg'},
{'name': 'DCS315 Camera.jpg','path': 'resources/DCS315 Camera.jpg'},
{'name': 'coat-tree.jpg','path': 'resources/coat-tree.jpg'},
{'name': '69d21be1-3163-4aef-aacd-df4baeab9701_300.jpg','path': 'resources/69d21be1-3163-4aef-aacd-df4baeab9701_300.jpg'},
{'name': 'wolf-pup -500.jpg','path': 'resources/wolf-pup -500.jpg'},
{'name': 'sandisk_sansa_m240_digital_audio_mp3_player-750479.jpg','path': 'resources/sandisk_sansa_m240_digital_audio_mp3_player-750479.jpg'},
{'name': 'AELCGUI12.jpg','path': 'resources/AELCGUI12.jpg'},
{'name': 'Acookingpan6.jpg','path': 'resources/Acookingpan6.jpg'},
{'name': 'pizzapie.jpg','path': 'resources/pizzapie.jpg'},
{'name': '2003071700080406.jpg','path': 'resources/2003071700080406.jpg'},
{'name': 'ACOIN6.jpg','path': 'resources/ACOIN6.jpg'},
{'name': '1342_bialy_large.jpg','path': 'resources/1342_bialy_large.jpg'},
{'name': 'A4LEFTKEY.jpg','path': 'resources/A4LEFTKEY.jpg'},
{'name': 'AALTIRE.jpg','path': 'resources/AALTIRE.jpg'},
{'name': 'Agoldfishswi8.jpg','path': 'resources/Agoldfishswi8.jpg'},
{'name': 'Untitled-6.jpg','path': 'resources/Untitled-6.jpg'},
{'name': '04922349088.jpg','path': 'resources/04922349088.jpg'},
{'name': 'ABELL31.jpg','path': 'resources/ABELL31.jpg'},
{'name': 'n_sf_1666.jpg','path': 'resources/n_sf_1666.jpg'},
{'name': '049881410001.jpg','path': 'resources/049881410001.jpg'},
{'name': '160_0057.jpg','path': 'resources/160_0057.jpg'},
{'name': 'AORITABLS.jpg','path': 'resources/AORITABLS.jpg'},
{'name': 'doll-house-4-7in.jpg','path': 'resources/doll-house-4-7in.jpg'},
{'name': 'Apencilshar13.jpg','path': 'resources/Apencilshar13.jpg'},
{'name': '647dd095-b0f5-4824-88a8-a457c0bb1f72_300.jpg','path': 'resources/647dd095-b0f5-4824-88a8-a457c0bb1f72_300.jpg'},
{'name': 'APALMRTEE.jpg','path': 'resources/APALMRTEE.jpg'},
{'name': 'APDB.jpg','path': 'resources/APDB.jpg'},
{'name': 'pumpkin.jpg','path': 'resources/pumpkin.jpg'},
{'name': '5965002_ra.jpg','path': 'resources/5965002_ra.jpg'},
{'name': 'draggold.jpg','path': 'resources/draggold.jpg'},
{'name': 'nunchaku2.jpg','path': 'resources/nunchaku2.jpg'},
{'name': 'Jackson Wheelbarrow Produvt.jpg','path': 'resources/Jackson Wheelbarrow Produvt.jpg'},
{'name': 'ACATPLAY5.jpg','path': 'resources/ACATPLAY5.jpg'},
{'name': 'ALOG6.jpg','path': 'resources/ALOG6.jpg'},
{'name': '35312253.thl.jpg','path': 'resources/35312253.thl.jpg'},
{'name': 'p2796972dt.jpg','path': 'resources/p2796972dt.jpg'},
{'name': 'jd-bug-eco-scooter-blue.jpg','path': 'resources/jd-bug-eco-scooter-blue.jpg'},
{'name': 'img_door_knockers_NEM2207.jpg','path': 'resources/img_door_knockers_NEM2207.jpg'},
{'name': 'A6DOMINO.jpg','path': 'resources/A6DOMINO.jpg'},
{'name': '26388357.thl.jpg','path': 'resources/26388357.thl.jpg'},
{'name': 'Abottle96.jpg','path': 'resources/Abottle96.jpg'},
{'name': 'ABONGO6.jpg','path': 'resources/ABONGO6.jpg'},
{'name': 'peg_perego_uno_verde.jpg','path': 'resources/peg_perego_uno_verde.jpg'},
{'name': 'kayak_complet_10.jpg','path': 'resources/kayak_complet_10.jpg'},
{'name': 'APADLOCK.jpg','path': 'resources/APADLOCK.jpg'},
{'name': 'Abowl59.jpg','path': 'resources/Abowl59.jpg'},
{'name': 'D-1 Four drawers desk Elm 64x23x33.jpg','path': 'resources/D-1 Four drawers desk Elm 64x23x33.jpg'},
{'name': 'Large martingale-Reflective.jpg','path': 'resources/Large martingale-Reflective.jpg'},
{'name': 'p3956769dt.jpg','path': 'resources/p3956769dt.jpg'},
{'name': 'Make-Up-Set-Cake.jpg','path': 'resources/Make-Up-Set-Cake.jpg'},
{'name': 'AKEY12.jpg','path': 'resources/AKEY12.jpg'},
{'name': 'stingray-leather-hobo-handbag-1.jpg','path': 'resources/stingray-leather-hobo-handbag-1.jpg'},
{'name': '8700rDeviceHomeRibbonFull.JPG','path': 'resources/8700rDeviceHomeRibbonFull.JPG'},
{'name': 'corkscrew.jpg','path': 'resources/corkscrew.jpg'},
{'name': 'laptopnew09.jpg','path': 'resources/laptopnew09.jpg'},
{'name': 'nlc009389-v6.jpg','path': 'resources/nlc009389-v6.jpg'},
{'name': 'ABIRDHO27.jpg','path': 'resources/ABIRDHO27.jpg'},
{'name': 'P184708_hero.jpg','path': 'resources/P184708_hero.jpg'},
{'name': 'best_twin_tall.jpg','path': 'resources/best_twin_tall.jpg'},
{'name': 'aspirateur-bassin.jpg','path': 'resources/aspirateur-bassin.jpg'},
{'name': 'HM651001a_Leatherman_tool_charge_ti_mit_lederetui_Relags.jpg','path': 'resources/HM651001a_Leatherman_tool_charge_ti_mit_lederetui_Relags.jpg'},
{'name': 'gold heart rosary.jpg','path': 'resources/gold heart rosary.jpg'},
{'name': 'MotoSmall.jpg','path': 'resources/MotoSmall.jpg'},
{'name': 'Sony_Bravia_cellphone_1.jpg','path': 'resources/Sony_Bravia_cellphone_1.jpg'},
{'name': 'p1983817dt.jpg','path': 'resources/p1983817dt.jpg'},
{'name': 'Canaletti Gray 1.JPG','path': 'resources/Canaletti Gray 1.JPG'},
{'name': '0604100L.jpg','path': 'resources/0604100L.jpg'},
{'name': 'samanthas-fixation-socks.jpg','path': 'resources/samanthas-fixation-socks.jpg'},
{'name': 'ABIRDCA10.jpg','path': 'resources/ABIRDCA10.jpg'},
{'name': 'Kamenstein-12-Tin-Magnetic-Spice-Rack-B0002TVV34-L.jpg','path': 'resources/Kamenstein-12-Tin-Magnetic-Spice-Rack-B0002TVV34-L.jpg'},
{'name': 'P190250_hero.jpg','path': 'resources/P190250_hero.jpg'},
{'name': 'r.jpg','path': 'resources/r.jpg'},
{'name': 'muffin02.jpg','path': 'resources/muffin02.jpg'},
{'name': 'ADUSTER7.jpg','path': 'resources/ADUSTER7.jpg'},
{'name': 'Wilson53Big.jpg','path': 'resources/Wilson53Big.jpg'},
{'name': 'APASTA20.jpg','path': 'resources/APASTA20.jpg'},
{'name': 'Cemco_45lb_dumbbell_medium.jpg','path': 'resources/Cemco_45lb_dumbbell_medium.jpg'},
{'name': 'Aspraybottle6.jpg','path': 'resources/Aspraybottle6.jpg'},
{'name': 'ABONZAI23.jpg','path': 'resources/ABONZAI23.jpg'},
{'name': 'Pumpkin Hookah Pipe Green on Red.jpg','path': 'resources/Pumpkin Hookah Pipe Green on Red.jpg'},
{'name': 'keyboardnew02.jpg','path': 'resources/keyboardnew02.jpg'},
{'name': 'Alamp102.jpg','path': 'resources/Alamp102.jpg'},
{'name': 'xbox-controller-s.jpg','path': 'resources/xbox-controller-s.jpg'},
{'name': '746160.jpg','path': 'resources/746160.jpg'},
{'name': 'ATRACTO39.jpg','path': 'resources/ATRACTO39.jpg'},
{'name': 'B0000C7AYO.02.LZZZZZZZ.jpg','path': 'resources/B0000C7AYO.02.LZZZZZZZ.jpg'},
{'name': 'candy 132.jpg','path': 'resources/candy 132.jpg'},
{'name': 'roger.jpg','path': 'resources/roger.jpg'},
{'name': 'potatochips.jpg','path': 'resources/potatochips.jpg'},
{'name': 'happy-lei-light-green.jpg','path': 'resources/happy-lei-light-green.jpg'},
{'name': 'f4d325b6-e769-44e6-aa3b-e1af36e1d71a_300.jpg','path': 'resources/f4d325b6-e769-44e6-aa3b-e1af36e1d71a_300.jpg'},
{'name': 'MOME800-33.jpg','path': 'resources/MOME800-33.jpg'},
{'name': 'cobra80.jpg','path': 'resources/cobra80.jpg'},
{'name': '7760719_sa.jpg','path': 'resources/7760719_sa.jpg'},
{'name': 'ABINOCULA.jpg','path': 'resources/ABINOCULA.jpg'},
{'name': 'RACING-BIKE-13540473898.jpg','path': 'resources/RACING-BIKE-13540473898.jpg'},
{'name': '2592!36-4867391.jpg','path': 'resources/2592!36-4867391.jpg'},
{'name': 'ATONGS.jpg','path': 'resources/ATONGS.jpg'},
{'name': 'CashRegMedium.jpg','path': 'resources/CashRegMedium.jpg'},
{'name': 'Agardeningsho.jpg','path': 'resources/Agardeningsho.jpg'},
{'name': 'recipes_parfait.jpg','path': 'resources/recipes_parfait.jpg'},
{'name': '15265.jpg','path': 'resources/15265.jpg'},
{'name': 'baylor.JPG','path': 'resources/baylor.JPG'},
{'name': 'Avase143.jpg','path': 'resources/Avase143.jpg'},
{'name': 'PinkPassionWoovenHeadband.jpg','path': 'resources/PinkPassionWoovenHeadband.jpg'},
{'name': 'ASALTPEPP.jpg','path': 'resources/ASALTPEPP.jpg'},
{'name': 'ALIGHTE25.jpg','path': 'resources/ALIGHTE25.jpg'},
{'name': 'hammer.jpg','path': 'resources/hammer.jpg'},
{'name': '83266516_6dc38dd6d2.jpg','path': 'resources/83266516_6dc38dd6d2.jpg'},
{'name': 'l3659610.jpg','path': 'resources/l3659610.jpg'},
{'name': 'ATRUNK16.jpg','path': 'resources/ATRUNK16.jpg'},
{'name': '8a8aacfa-d0d4-48b4-883d-effc8c11bac5.jpg','path': 'resources/8a8aacfa-d0d4-48b4-883d-effc8c11bac5.jpg'},
{'name': 'ATOGOFLAG.jpg','path': 'resources/ATOGOFLAG.jpg'},
{'name': '_ds400-500.jpg','path': 'resources/_ds400-500.jpg'},
{'name': 'headphones_l.jpg','path': 'resources/headphones_l.jpg'},
{'name': '41TBS5KP5YL._SS384_.jpg','path': 'resources/41TBS5KP5YL._SS384_.jpg'},
{'name': 'Atrafficsign2.jpg','path': 'resources/Atrafficsign2.jpg'},
{'name': 'milkyway.jpg','path': 'resources/milkyway.jpg'},
{'name': 'f18f0560-da6f-4148-a6b1-b7bd17f46059_300.jpg','path': 'resources/f18f0560-da6f-4148-a6b1-b7bd17f46059_300.jpg'},
{'name': 'LPS1540.jpg','path': 'resources/LPS1540.jpg'},
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
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=618101AC', '');
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

function experimentInit() {
  // Initialize components for Routine "inf_agrm"
  inf_agrmClock = new util.Clock();
  text_agrm = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_agrm',
    text: "EXPERIMENT DESCRIPTION. \nIn this experiment, you will be shown a set of images that you need to memorize. After the set presentation, you'll need to choose from images presented on the screen one that you had seen before. You can choose it by mouse clicking on the image. \nRISKS.\nYou will be required only to continue to interact with your web browser and make responses for a short duration. \nThus, no potential risks or discomforts are anticipated. However, there may be risks that are currently unforeseeable.\nBENEFITS. \nThere will be no direct benefit to you from these procedures. However, the investigator may learn more about basic questions pertaining to attention, memory and vision. This knowledge may have benefits to society in fields ranging from improving education to visual design, but these benefits will be indirect.\nYour participation is solicited, yet strictly voluntary. All information will be kept confidential and your name will not be associated with any research findings.\nBy pressing SPACE, you are indicating that you are at least 18 years old, have read this consent form and agree to participate in this research study. Otherwise, press Escape",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  // Initialize components for Routine "instr_training"
  instr_trainingClock = new util.Clock();
  instr_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_tr',
    text: 'Thank you for participating!\nIt will take you no more than 15 minutes to complete the task.\nPlease turn off notifications on all devices that may disturb you.\n\nThere are 2 parts of the experiment:\nIn the first part, you need to remember all the presented images.\nIn the second part, you must select from images on the screen the one that was shown earlier (in the first part).\n\nIf you are ready to run the first part of the experiment click the mouse button.\n',
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
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "instr_exp"
  instr_expClock = new util.Clock();
  instr_ex = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_ex',
    text: 'In the second part of the experiment, you must select from images on the screen the one that was shown earlier in the first part. \n\nIf you are ready to run the second part of the experiment click the mouse button.\n',
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
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Thank you for participating in the experiment!\n\nClick the left mouse button to return to Prolific.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
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

var trials_2;
var trials;
var currentLoop;
var frameRemains;

function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '2AFC_3.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      const snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(trainingRoutineBegin(snapshot));
      trials_2LoopScheduler.add(trainingRoutineEachFrame());
      trials_2LoopScheduler.add(trainingRoutineEnd());
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}

function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '2AFC_3.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(expRoutineBegin(snapshot));
      trialsLoopScheduler.add(expRoutineEachFrame());
      trialsLoopScheduler.add(expRoutineEnd());
      trialsLoopScheduler.add(exp_feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(exp_feedbackRoutineEachFrame());
      trialsLoopScheduler.add(exp_feedbackRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

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
