/*************** 
 * 2Afc_1 *
 ***************/


// store info about the experiment session:
let expName = '2AFC_1';  // from the Builder filename that created this script
let expInfo = {
    'Prolific_ID': '',
    'Age': '',
    'Gender': '',
};

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
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
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
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const pic_remeberingLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(pic_remeberingLoopBegin(pic_remeberingLoopScheduler));
flowScheduler.add(pic_remeberingLoopScheduler);
flowScheduler.add(pic_remeberingLoopEnd);


flowScheduler.add(BeforeExpRoutineBegin());
flowScheduler.add(BeforeExpRoutineEachFrame());
flowScheduler.add(BeforeExpRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(ThankYouRoutineBegin());
flowScheduler.add(ThankYouRoutineEachFrame());
flowScheduler.add(ThankYouRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': '2AFC_1.xlsx', 'path': '2AFC_1.xlsx'},
    {'name': 'ab52.jpg', 'path': 'ab52.jpg'},
    {'name': 'ab44.jpg', 'path': 'ab44.jpg'},
    {'name': 'AMUSICSTA.jpg', 'path': 'AMUSICSTA.jpg'},
    {'name': 'AMUSTAND7.jpg', 'path': 'AMUSTAND7.jpg'},
    {'name': 'AFRAME138.jpg', 'path': 'AFRAME138.jpg'},
    {'name': 'AFRAME139.jpg', 'path': 'AFRAME139.jpg'},
    {'name': 'swords_western_tizona_of_charles_v.jpg', 'path': 'swords_western_tizona_of_charles_v.jpg'},
    {'name': 'swords_gladiator_sword_of_tigris.jpg', 'path': 'swords_gladiator_sword_of_tigris.jpg'},
    {'name': 'Straight_Shaft_Umbrellas.jpg', 'path': 'Straight_Shaft_Umbrellas.jpg'},
    {'name': 'umbrella-golf-a.jpg', 'path': 'umbrella-golf-a.jpg'},
    {'name': '060350.jpg', 'path': '060350.jpg'},
    {'name': 'rrr.jpg', 'path': 'rrr.jpg'},
    {'name': 'O-CRT-DU_lrg.jpg', 'path': 'O-CRT-DU_lrg.jpg'},
    {'name': 'B000BHICM0.01._AA280_SCLZZZZZZZ_.jpg', 'path': 'B000BHICM0.01._AA280_SCLZZZZZZZ_.jpg'},
    {'name': '040115_gadgets_razor_hmed10a.hmedium.jpg', 'path': '040115_gadgets_razor_hmed10a.hmedium.jpg'},
    {'name': 'RASOIR1590-PHILIPS-HQ7782.jpg', 'path': 'RASOIR1590-PHILIPS-HQ7782.jpg'},
    {'name': 'Ahorn21.jpg', 'path': 'Ahorn21.jpg'},
    {'name': 'Ahorn30.jpg', 'path': 'Ahorn30.jpg'},
    {'name': '2000-4684_M.jpg', 'path': '2000-4684_M.jpg'},
    {'name': 'cowgirlpin_big.jpg', 'path': 'cowgirlpin_big.jpg'},
    {'name': '1078390905.jpg', 'path': '1078390905.jpg'},
    {'name': '1167776528_Singer-7466.jpg', 'path': '1167776528_Singer-7466.jpg'},
    {'name': 'cassette-tape-1.jpg', 'path': 'cassette-tape-1.jpg'},
    {'name': 'detroit-tape-livepics-cass.jpg', 'path': 'detroit-tape-livepics-cass.jpg'},
    {'name': 'AFIREPLA2.jpg', 'path': 'AFIREPLA2.jpg'},
    {'name': 'AFIREPLA4.jpg', 'path': 'AFIREPLA4.jpg'},
    {'name': 'shears2.jpg', 'path': 'shears2.jpg'},
    {'name': '5_Lister_Bandage_Scissor.jpg', 'path': '5_Lister_Bandage_Scissor.jpg'},
    {'name': 'ehs.jpg', 'path': 'ehs.jpg'},
    {'name': 'ecs.jpg', 'path': 'ecs.jpg'},
    {'name': 'babyant_1966_1034199.jpg', 'path': 'babyant_1966_1034199.jpg'},
    {'name': '22683.jpg', 'path': '22683.jpg'},
    {'name': 'Sandwichww.jpg', 'path': 'Sandwichww.jpg'},
    {'name': 'BWNewsImage535281.jpg', 'path': 'BWNewsImage535281.jpg'},
    {'name': 'saunders12530_RingBinder.jpg', 'path': 'saunders12530_RingBinder.jpg'},
    {'name': 's0165607_enl.jpg', 'path': 's0165607_enl.jpg'},
    {'name': '9001.jpg', 'path': '9001.jpg'},
    {'name': 'fork_up.jpg', 'path': 'fork_up.jpg'},
    {'name': 'Aredapple5.jpg', 'path': 'Aredapple5.jpg'},
    {'name': 'Aapple34.jpg', 'path': 'Aapple34.jpg'},
    {'name': 'tapir-stamp_31.jpg', 'path': 'tapir-stamp_31.jpg'},
    {'name': 'Timbre07FestivalTeleAG.jpg', 'path': 'Timbre07FestivalTeleAG.jpg'},
    {'name': 'her9796.jpg', 'path': 'her9796.jpg'},
    {'name': 'hamadan-rug.jpg', 'path': 'hamadan-rug.jpg'},
    {'name': 'APLANT6.jpg', 'path': 'APLANT6.jpg'},
    {'name': 'APLANT14.jpg', 'path': 'APLANT14.jpg'},
    {'name': 'ADOLL169.jpg', 'path': 'ADOLL169.jpg'},
    {'name': 'ADOLL158.jpg', 'path': 'ADOLL158.jpg'},
    {'name': '3D_Design_Toilet_Seat.jpg', 'path': '3D_Design_Toilet_Seat.jpg'},
    {'name': 'Polyester_Toilet_Seat__White_.jpg', 'path': 'Polyester_Toilet_Seat__White_.jpg'},
    {'name': 'ACOOKPO14.jpg', 'path': 'ACOOKPO14.jpg'},
    {'name': 'ACOOKPO56.jpg', 'path': 'ACOOKPO56.jpg'},
    {'name': 'APIESERV3.jpg', 'path': 'APIESERV3.jpg'},
    {'name': 'APIESERV2.jpg', 'path': 'APIESERV2.jpg'},
    {'name': 'tienew07.jpg', 'path': 'tienew07.jpg'},
    {'name': 'tienew14.jpg', 'path': 'tienew14.jpg'},
    {'name': 'B00005OONH.01.LZZZZZZZ.jpg', 'path': 'B00005OONH.01.LZZZZZZZ.jpg'},
    {'name': 'High-Chair-HC-201-4-.jpg', 'path': 'High-Chair-HC-201-4-.jpg'},
    {'name': 'AWSHOES4.jpg', 'path': 'AWSHOES4.jpg'},
    {'name': 'Awomansshoe.jpg', 'path': 'Awomansshoe.jpg'},
    {'name': 'AFISHLU5.jpg', 'path': 'AFISHLU5.jpg'},
    {'name': 'AFISHLUR7.jpg', 'path': 'AFISHLUR7.jpg'},
    {'name': 'PY2H1461.jpg', 'path': 'PY2H1461.jpg'},
    {'name': 'ASEASHE17.jpg', 'path': 'ASEASHE17.jpg'},
    {'name': 'T3AM07.jpg', 'path': 'T3AM07.jpg'},
    {'name': 'Shot Glass_450.jpg', 'path': 'Shot Glass_450.jpg'},
    {'name': 'tc1050b_500pix.jpg', 'path': 'tc1050b_500pix.jpg'},
    {'name': 'dealerImage_843.jpg', 'path': 'dealerImage_843.jpg'},
    {'name': 'images-4898.jpg', 'path': 'images-4898.jpg'},
    {'name': 'ABARREL3.jpg', 'path': 'ABARREL3.jpg'},
    {'name': 'M4791.jpg', 'path': 'M4791.jpg'},
    {'name': 'AFG Amy 4 in 1 Convertible Crib.jpg', 'path': 'AFG Amy 4 in 1 Convertible Crib.jpg'},
    {'name': '712_toothbrush.jpg', 'path': '712_toothbrush.jpg'},
    {'name': 'Atoothbrush3.jpg', 'path': 'Atoothbrush3.jpg'},
    {'name': 'Abackpack31.jpg', 'path': 'Abackpack31.jpg'},
    {'name': 'Abackpack8.jpg', 'path': 'Abackpack8.jpg'},
    {'name': 'Amanualfan16.jpg', 'path': 'Amanualfan16.jpg'},
    {'name': 'Amanualfan3.jpg', 'path': 'Amanualfan3.jpg'},
    {'name': 'DSC00961.JPG', 'path': 'DSC00961.JPG'},
    {'name': 'red-swingline-stapler.jpg', 'path': 'red-swingline-stapler.jpg'},
    {'name': 'Alunchbox115.jpg', 'path': 'Alunchbox115.jpg'},
    {'name': 'Abottle52.jpg', 'path': 'Abottle52.jpg'},
    {'name': 'Awickerbask21.jpg', 'path': 'Awickerbask21.jpg'},
    {'name': 'ABONGO22.jpg', 'path': 'ABONGO22.jpg'},
    {'name': '41AWBNXQRML._AA262_.jpg', 'path': '41AWBNXQRML._AA262_.jpg'},
    {'name': 'Baby_Stroller.jpg', 'path': 'Baby_Stroller.jpg'},
    {'name': 'small lilliput robot.jpg', 'path': 'small lilliput robot.jpg'},
    {'name': 'Breeze_kayak_2.jpg', 'path': 'Breeze_kayak_2.jpg'},
    {'name': 'ADOG61.jpg', 'path': 'ADOG61.jpg'},
    {'name': 'Padlock_full.jpg', 'path': 'Padlock_full.jpg'},
    {'name': 'Cherry-Pie.jpg', 'path': 'Cherry-Pie.jpg'},
    {'name': 'Abowl50.jpg', 'path': 'Abowl50.jpg'},
    {'name': 'a00e7dbe-acad-41ed-b95d-6b5ffbbe4c9a_300.jpg', 'path': 'a00e7dbe-acad-41ed-b95d-6b5ffbbe4c9a_300.jpg'},
    {'name': 'AA Luffield Radial crescent Desk 1600mm x 1200mm.jpg', 'path': 'AA Luffield Radial crescent Desk 1600mm x 1200mm.jpg'},
    {'name': 'ROMSL1374.jpg', 'path': 'ROMSL1374.jpg'},
    {'name': 'ecolution_collarS.jpg', 'path': 'ecolution_collarS.jpg'},
    {'name': '7264122_ra.jpg', 'path': '7264122_ra.jpg'},
    {'name': 'p3677539dt.jpg', 'path': 'p3677539dt.jpg'},
    {'name': 'AGLOBE8.jpg', 'path': 'AGLOBE8.jpg'},
    {'name': 'cake-crop.jpg', 'path': 'cake-crop.jpg'},
    {'name': 'l_640045_s05_000.jpg', 'path': 'l_640045_s05_000.jpg'},
    {'name': 'AANKEY.jpg', 'path': 'AANKEY.jpg'},
    {'name': 'replacementbulb2.jpg', 'path': 'replacementbulb2.jpg'},
    {'name': 'AHANDBAG6.jpg', 'path': 'AHANDBAG6.jpg'},
    {'name': 'Brass scales uid.jpg', 'path': 'Brass scales uid.jpg'},
    {'name': 'MicrosoftTreoH4Web.jpg', 'path': 'MicrosoftTreoH4Web.jpg'},
    {'name': 'b2c_l_scd6550.jpg', 'path': 'b2c_l_scd6550.jpg'},
    {'name': 'Abottleopener.jpg', 'path': 'Abottleopener.jpg'},
    {'name': 'Multimedia_Speakers.jpg', 'path': 'Multimedia_Speakers.jpg'},
    {'name': 'laptopnew04.jpg', 'path': 'laptopnew04.jpg'},
    {'name': '1383_1749_popup copy.jpg', 'path': '1383_1749_popup copy.jpg'},
    {'name': '2120B_blue_floral_handkerchief.jpg', 'path': '2120B_blue_floral_handkerchief.jpg'},
    {'name': '042_0013.jpg', 'path': '042_0013.jpg'},
    {'name': 'ABIRDHO20.jpg', 'path': 'ABIRDHO20.jpg'},
    {'name': 'ATYPEWR46.jpg', 'path': 'ATYPEWR46.jpg'},
    {'name': '31sCvjMS3jL._SS500_.jpg', 'path': '31sCvjMS3jL._SS500_.jpg'},
    {'name': 'Abird22.jpg', 'path': 'Abird22.jpg'},
    {'name': 'unbranded-cumfilux-astral-3ft-mattress.jpg', 'path': 'unbranded-cumfilux-astral-3ft-mattress.jpg'},
    {'name': '79398-3-1-99.77F-K75-5-0013_320x320.jpg', 'path': '79398-3-1-99.77F-K75-5-0013_320x320.jpg'},
    {'name': '3060324930_XL.jpg', 'path': '3060324930_XL.jpg'},
    {'name': '009.-trashcan_lrg.jpg', 'path': '009.-trashcan_lrg.jpg'},
    {'name': 'LM8R.jpg', 'path': 'LM8R.jpg'},
    {'name': 'AMOTH28.jpg', 'path': 'AMOTH28.jpg'},
    {'name': '594.jpg', 'path': '594.jpg'},
    {'name': 'Aclock282.jpg', 'path': 'Aclock282.jpg'},
    {'name': 'speedbike.jpg', 'path': 'speedbike.jpg'},
    {'name': '230397853.jpg', 'path': '230397853.jpg'},
    {'name': 'motorola c115-thumb.jpg', 'path': 'motorola c115-thumb.jpg'},
    {'name': 'necklascenew04.jpg', 'path': 'necklascenew04.jpg'},
    {'name': 'p2740000dt.jpg', 'path': 'p2740000dt.jpg'},
    {'name': 'boucles_d_oreilles_bonchd_0203.jpg', 'path': 'boucles_d_oreilles_bonchd_0203.jpg'},
    {'name': 'ss30.jpg', 'path': 'ss30.jpg'},
    {'name': 'APACKME32.jpg', 'path': 'APACKME32.jpg'},
    {'name': '060621160348s.jpg', 'path': '060621160348s.jpg'},
    {'name': '091106micdroshred.jpg', 'path': '091106micdroshred.jpg'},
    {'name': 'socks-6780.jpg', 'path': 'socks-6780.jpg'},
    {'name': '269-200613-_DSC0873.jpg', 'path': '269-200613-_DSC0873.jpg'},
    {'name': 'BirdCage-19-single-on-white.jpg', 'path': 'BirdCage-19-single-on-white.jpg'},
    {'name': 'Apex_pcb.jpg', 'path': 'Apex_pcb.jpg'},
    {'name': 'spicerack1.jpg', 'path': 'spicerack1.jpg'},
    {'name': 'single flap.jpg', 'path': 'single flap.jpg'},
    {'name': '262597_fpx.jpg', 'path': '262597_fpx.jpg'},
    {'name': 'popmech2.jpg', 'path': 'popmech2.jpg'},
    {'name': 'colgate.jpg', 'path': 'colgate.jpg'},
    {'name': 'AREDCOUC5.jpg', 'path': 'AREDCOUC5.jpg'},
    {'name': 'img_9246-muffin.jpg', 'path': 'img_9246-muffin.jpg'},
    {'name': 'AWIG73.jpg', 'path': 'AWIG73.jpg'},
    {'name': 'ADUSTER5.jpg', 'path': 'ADUSTER5.jpg'},
    {'name': 'AROCK9.jpg', 'path': 'AROCK9.jpg'},
    {'name': 'p2363441dt.jpg', 'path': 'p2363441dt.jpg'},
    {'name': 'Amateur_ice_hockey_skates.jpg', 'path': 'Amateur_ice_hockey_skates.jpg'},
    {'name': 'APASTA.jpg', 'path': 'APASTA.jpg'},
    {'name': 'BROOM.jpg', 'path': 'BROOM.jpg'},
    {'name': '41K7QVRX50L._SS500_.jpg', 'path': '41K7QVRX50L._SS500_.jpg'},
    {'name': 'perfume5-b.jpg', 'path': 'perfume5-b.jpg'},
    {'name': 'Aspraybottle5.jpg', 'path': 'Aspraybottle5.jpg'},
    {'name': '51wbushUphL._AA262_.jpg', 'path': '51wbushUphL._AA262_.jpg'},
    {'name': '1639-large.jpg', 'path': '1639-large.jpg'},
    {'name': 'Abikini5.jpg', 'path': 'Abikini5.jpg'},
    {'name': 'devilsblue986.jpg', 'path': 'devilsblue986.jpg'},
    {'name': 'logitech-dinovo-edge.jpg', 'path': 'logitech-dinovo-edge.jpg'},
    {'name': 'APAINTBR6.jpg', 'path': 'APAINTBR6.jpg'},
    {'name': 'ALAMP19.jpg', 'path': 'ALAMP19.jpg'},
    {'name': '31C46AWYS7L._AA280_.jpg', 'path': '31C46AWYS7L._AA280_.jpg'},
    {'name': 'joy011.jpg', 'path': 'joy011.jpg'},
    {'name': 'ADRESSE43.jpg', 'path': 'ADRESSE43.jpg'},
    {'name': 'ACHEESGR4.jpg', 'path': 'ACHEESGR4.jpg'},
    {'name': 'Yellow-Kettle.jpg', 'path': 'Yellow-Kettle.jpg'},
    {'name': 'ATRACTOR6.jpg', 'path': 'ATRACTOR6.jpg'},
    {'name': 'matzah.jpg', 'path': 'matzah.jpg'},
    {'name': 'francisfrancisx1-coffee-maker.jpg', 'path': 'francisfrancisx1-coffee-maker.jpg'},
    {'name': 'blackandtan.jpg', 'path': 'blackandtan.jpg'},
    {'name': 'candy 66.jpg', 'path': 'candy 66.jpg'},
    {'name': 'pipe52.jpg', 'path': 'pipe52.jpg'},
    {'name': 'exact.jpg', 'path': 'exact.jpg'},
    {'name': 'mom_quilt.jpg', 'path': 'mom_quilt.jpg'},
    {'name': 'potatochips2.jpg', 'path': 'potatochips2.jpg'},
    {'name': 'Atoycoil.jpg', 'path': 'Atoycoil.jpg'},
    {'name': 'ALEI16.jpg', 'path': 'ALEI16.jpg'},
    {'name': 'Red Canyon Tent.jpg', 'path': 'Red Canyon Tent.jpg'},
    {'name': '3ce51135-ecf8-4172-82d1-528e7fe6edf6_300.jpg', 'path': '3ce51135-ecf8-4172-82d1-528e7fe6edf6_300.jpg'},
    {'name': 'cr89bt.jpg', 'path': 'cr89bt.jpg'},
    {'name': 'Spout_bottle_opener.jpg', 'path': 'Spout_bottle_opener.jpg'},
    {'name': 'ACUSHIO26.jpg', 'path': 'ACUSHIO26.jpg'},
    {'name': 'ABOWARRO4.jpg', 'path': 'ABOWARRO4.jpg'},
    {'name': '7450-Pro-Gloves-Long-Back.jpg', 'path': '7450-Pro-Gloves-Long-Back.jpg'},
    {'name': '7424557_sa.jpg', 'path': '7424557_sa.jpg'},
    {'name': 'TOY-010.jpg', 'path': 'TOY-010.jpg'},
    {'name': 'ABINOCU53.jpg', 'path': 'ABINOCU53.jpg'},
    {'name': '11193-large.jpg', 'path': '11193-large.jpg'},
    {'name': 'folding_bike_dahon.jpg', 'path': 'folding_bike_dahon.jpg'},
    {'name': 'Life-Fitness-C1-5-Upright-Exercise-Bike.jpg', 'path': 'Life-Fitness-C1-5-Upright-Exercise-Bike.jpg'},
    {'name': '26461874.thl.jpg', 'path': '26461874.thl.jpg'},
    {'name': 'AGREENHAT.jpg', 'path': 'AGREENHAT.jpg'},
    {'name': '132005.jpg', 'path': '132005.jpg'},
    {'name': 'roquefort.jpg', 'path': 'roquefort.jpg'},
    {'name': 'CashRegister.jpg', 'path': 'CashRegister.jpg'},
    {'name': 'henrybar_stool1.jpg', 'path': 'henrybar_stool1.jpg'},
    {'name': 'Agardeninghoe.jpg', 'path': 'Agardeninghoe.jpg'},
    {'name': '22864488.thl.jpg', 'path': '22864488.thl.jpg'},
    {'name': 'parfait.jpg', 'path': 'parfait.jpg'},
    {'name': 'APITCHER8.jpg', 'path': 'APITCHER8.jpg'},
    {'name': 'SleepingCherubOnShell32004.jpg', 'path': 'SleepingCherubOnShell32004.jpg'},
    {'name': 'hawaiian_shirt_corvette_panel_rd_pf.jpg', 'path': 'hawaiian_shirt_corvette_panel_rd_pf.jpg'},
    {'name': '1975hunter.jpg', 'path': '1975hunter.jpg'},
    {'name': '101643b_l.jpg', 'path': '101643b_l.jpg'},
    {'name': 'Avase106.jpg', 'path': 'Avase106.jpg'},
    {'name': 'Aspoolofstrin.jpg', 'path': 'Aspoolofstrin.jpg'},
    {'name': 'SimplyChickHeadband32.jpg', 'path': 'SimplyChickHeadband32.jpg'},
    {'name': 'train9.jpg', 'path': 'train9.jpg'},
    {'name': 'Salt_Pepper_Mills_Sets.jpg', 'path': 'Salt_Pepper_Mills_Sets.jpg'},
    {'name': 'teddybear_1.jpg', 'path': 'teddybear_1.jpg'},
    {'name': 'ALIGHTE24.jpg', 'path': 'ALIGHTE24.jpg'},
    {'name': 'ALADYMUG2.jpg', 'path': 'ALADYMUG2.jpg'},
    {'name': 'hammernew03.jpg', 'path': 'hammernew03.jpg'},
    {'name': 'APILLS5.jpg', 'path': 'APILLS5.jpg'},
    {'name': 'ocadia11if.jpg', 'path': 'ocadia11if.jpg'},
    {'name': 'handle1.jpg', 'path': 'handle1.jpg'},
    {'name': 'folding_screens_retablo_d.jpg', 'path': 'folding_screens_retablo_d.jpg'},
    {'name': 'c8d48476-f185-4481-a124-4bb1d5c84793_300.jpg', 'path': 'c8d48476-f185-4481-a124-4bb1d5c84793_300.jpg'},
    {'name': 'coffre 2.jpg', 'path': 'coffre 2.jpg'},
    {'name': 'BOOT.jpg', 'path': 'BOOT.jpg'},
    {'name': 'p_NOR8121.jpg', 'path': 'p_NOR8121.jpg'},
    {'name': 'XVOFN.jpg', 'path': 'XVOFN.jpg'},
    {'name': 'ABELGFLAG.jpg', 'path': 'ABELGFLAG.jpg'},
    {'name': '59df2ab2-780a-4c04-ac8b-c1573ae078c4_300.jpg', 'path': '59df2ab2-780a-4c04-ac8b-c1573ae078c4_300.jpg'},
    {'name': 'Ultra-Short-pacific-blue400.jpg', 'path': 'Ultra-Short-pacific-blue400.jpg'},
    {'name': 'ALEAF54.jpg', 'path': 'ALEAF54.jpg'},
    {'name': 'AEARPHON6.jpg', 'path': 'AEARPHON6.jpg'},
    {'name': 'donut.jpg', 'path': 'donut.jpg'},
    {'name': '41XJB9YZ93L._SS384_.jpg', 'path': '41XJB9YZ93L._SS384_.jpg'},
    {'name': 'il-423-3784.jpg', 'path': 'il-423-3784.jpg'},
    {'name': 'Aroadsignin16.jpg', 'path': 'Aroadsignin16.jpg'},
    {'name': 'ACANDLE24.jpg', 'path': 'ACANDLE24.jpg'},
    {'name': 'caddycaddy.jpg', 'path': 'caddycaddy.jpg'},
    {'name': 'AHORSHOE4.jpg', 'path': 'AHORSHOE4.jpg'},
    {'name': 'a7b18beb-0ddd-4970-8618-53ccccd5950b_300.jpg', 'path': 'a7b18beb-0ddd-4970-8618-53ccccd5950b_300.jpg'},
    {'name': '22824636.thl.jpg', 'path': '22824636.thl.jpg'},
    {'name': '209170485_34857e863d_o.jpg', 'path': '209170485_34857e863d_o.jpg'},
    {'name': 'Starfish01N.jpg', 'path': 'Starfish01N.jpg'},
    {'name': '2AFC_1.xlsx', 'path': '2AFC_1.xlsx'},
    {'name': 'ab52.jpg', 'path': 'ab52.jpg'},
    {'name': 'ab44.jpg', 'path': 'ab44.jpg'},
    {'name': 'AMUSICSTA.jpg', 'path': 'AMUSICSTA.jpg'},
    {'name': 'AMUSTAND7.jpg', 'path': 'AMUSTAND7.jpg'},
    {'name': 'AFRAME138.jpg', 'path': 'AFRAME138.jpg'},
    {'name': 'AFRAME139.jpg', 'path': 'AFRAME139.jpg'},
    {'name': 'swords_western_tizona_of_charles_v.jpg', 'path': 'swords_western_tizona_of_charles_v.jpg'},
    {'name': 'swords_gladiator_sword_of_tigris.jpg', 'path': 'swords_gladiator_sword_of_tigris.jpg'},
    {'name': 'Straight_Shaft_Umbrellas.jpg', 'path': 'Straight_Shaft_Umbrellas.jpg'},
    {'name': 'umbrella-golf-a.jpg', 'path': 'umbrella-golf-a.jpg'},
    {'name': '060350.jpg', 'path': '060350.jpg'},
    {'name': 'rrr.jpg', 'path': 'rrr.jpg'},
    {'name': 'O-CRT-DU_lrg.jpg', 'path': 'O-CRT-DU_lrg.jpg'},
    {'name': 'B000BHICM0.01._AA280_SCLZZZZZZZ_.jpg', 'path': 'B000BHICM0.01._AA280_SCLZZZZZZZ_.jpg'},
    {'name': '040115_gadgets_razor_hmed10a.hmedium.jpg', 'path': '040115_gadgets_razor_hmed10a.hmedium.jpg'},
    {'name': 'RASOIR1590-PHILIPS-HQ7782.jpg', 'path': 'RASOIR1590-PHILIPS-HQ7782.jpg'},
    {'name': 'Ahorn21.jpg', 'path': 'Ahorn21.jpg'},
    {'name': 'Ahorn30.jpg', 'path': 'Ahorn30.jpg'},
    {'name': '2000-4684_M.jpg', 'path': '2000-4684_M.jpg'},
    {'name': 'cowgirlpin_big.jpg', 'path': 'cowgirlpin_big.jpg'},
    {'name': '1078390905.jpg', 'path': '1078390905.jpg'},
    {'name': '1167776528_Singer-7466.jpg', 'path': '1167776528_Singer-7466.jpg'},
    {'name': 'cassette-tape-1.jpg', 'path': 'cassette-tape-1.jpg'},
    {'name': 'detroit-tape-livepics-cass.jpg', 'path': 'detroit-tape-livepics-cass.jpg'},
    {'name': 'AFIREPLA2.jpg', 'path': 'AFIREPLA2.jpg'},
    {'name': 'AFIREPLA4.jpg', 'path': 'AFIREPLA4.jpg'},
    {'name': 'shears2.jpg', 'path': 'shears2.jpg'},
    {'name': '5_Lister_Bandage_Scissor.jpg', 'path': '5_Lister_Bandage_Scissor.jpg'},
    {'name': 'ehs.jpg', 'path': 'ehs.jpg'},
    {'name': 'ecs.jpg', 'path': 'ecs.jpg'},
    {'name': 'babyant_1966_1034199.jpg', 'path': 'babyant_1966_1034199.jpg'},
    {'name': '22683.jpg', 'path': '22683.jpg'},
    {'name': 'Sandwichww.jpg', 'path': 'Sandwichww.jpg'},
    {'name': 'BWNewsImage535281.jpg', 'path': 'BWNewsImage535281.jpg'},
    {'name': 'saunders12530_RingBinder.jpg', 'path': 'saunders12530_RingBinder.jpg'},
    {'name': 's0165607_enl.jpg', 'path': 's0165607_enl.jpg'},
    {'name': '9001.jpg', 'path': '9001.jpg'},
    {'name': 'fork_up.jpg', 'path': 'fork_up.jpg'},
    {'name': 'Aredapple5.jpg', 'path': 'Aredapple5.jpg'},
    {'name': 'Aapple34.jpg', 'path': 'Aapple34.jpg'},
    {'name': 'tapir-stamp_31.jpg', 'path': 'tapir-stamp_31.jpg'},
    {'name': 'Timbre07FestivalTeleAG.jpg', 'path': 'Timbre07FestivalTeleAG.jpg'},
    {'name': 'her9796.jpg', 'path': 'her9796.jpg'},
    {'name': 'hamadan-rug.jpg', 'path': 'hamadan-rug.jpg'},
    {'name': 'APLANT6.jpg', 'path': 'APLANT6.jpg'},
    {'name': 'APLANT14.jpg', 'path': 'APLANT14.jpg'},
    {'name': 'ADOLL169.jpg', 'path': 'ADOLL169.jpg'},
    {'name': 'ADOLL158.jpg', 'path': 'ADOLL158.jpg'},
    {'name': '3D_Design_Toilet_Seat.jpg', 'path': '3D_Design_Toilet_Seat.jpg'},
    {'name': 'Polyester_Toilet_Seat__White_.jpg', 'path': 'Polyester_Toilet_Seat__White_.jpg'},
    {'name': 'ACOOKPO14.jpg', 'path': 'ACOOKPO14.jpg'},
    {'name': 'ACOOKPO56.jpg', 'path': 'ACOOKPO56.jpg'},
    {'name': 'APIESERV3.jpg', 'path': 'APIESERV3.jpg'},
    {'name': 'APIESERV2.jpg', 'path': 'APIESERV2.jpg'},
    {'name': 'tienew07.jpg', 'path': 'tienew07.jpg'},
    {'name': 'tienew14.jpg', 'path': 'tienew14.jpg'},
    {'name': 'B00005OONH.01.LZZZZZZZ.jpg', 'path': 'B00005OONH.01.LZZZZZZZ.jpg'},
    {'name': 'High-Chair-HC-201-4-.jpg', 'path': 'High-Chair-HC-201-4-.jpg'},
    {'name': 'AWSHOES4.jpg', 'path': 'AWSHOES4.jpg'},
    {'name': 'Awomansshoe.jpg', 'path': 'Awomansshoe.jpg'},
    {'name': 'AFISHLU5.jpg', 'path': 'AFISHLU5.jpg'},
    {'name': 'AFISHLUR7.jpg', 'path': 'AFISHLUR7.jpg'},
    {'name': 'PY2H1461.jpg', 'path': 'PY2H1461.jpg'},
    {'name': 'ASEASHE17.jpg', 'path': 'ASEASHE17.jpg'},
    {'name': 'T3AM07.jpg', 'path': 'T3AM07.jpg'},
    {'name': 'Shot Glass_450.jpg', 'path': 'Shot Glass_450.jpg'},
    {'name': 'tc1050b_500pix.jpg', 'path': 'tc1050b_500pix.jpg'},
    {'name': 'dealerImage_843.jpg', 'path': 'dealerImage_843.jpg'},
    {'name': 'images-4898.jpg', 'path': 'images-4898.jpg'},
    {'name': 'ABARREL3.jpg', 'path': 'ABARREL3.jpg'},
    {'name': 'M4791.jpg', 'path': 'M4791.jpg'},
    {'name': 'AFG Amy 4 in 1 Convertible Crib.jpg', 'path': 'AFG Amy 4 in 1 Convertible Crib.jpg'},
    {'name': '712_toothbrush.jpg', 'path': '712_toothbrush.jpg'},
    {'name': 'Atoothbrush3.jpg', 'path': 'Atoothbrush3.jpg'},
    {'name': 'Abackpack31.jpg', 'path': 'Abackpack31.jpg'},
    {'name': 'Abackpack8.jpg', 'path': 'Abackpack8.jpg'},
    {'name': 'Amanualfan16.jpg', 'path': 'Amanualfan16.jpg'},
    {'name': 'Amanualfan3.jpg', 'path': 'Amanualfan3.jpg'},
    {'name': 'DSC00961.JPG', 'path': 'DSC00961.JPG'},
    {'name': 'red-swingline-stapler.jpg', 'path': 'red-swingline-stapler.jpg'},
    {'name': 'Alunchbox115.jpg', 'path': 'Alunchbox115.jpg'},
    {'name': 'Abottle52.jpg', 'path': 'Abottle52.jpg'},
    {'name': 'Awickerbask21.jpg', 'path': 'Awickerbask21.jpg'},
    {'name': 'ABONGO22.jpg', 'path': 'ABONGO22.jpg'},
    {'name': '41AWBNXQRML._AA262_.jpg', 'path': '41AWBNXQRML._AA262_.jpg'},
    {'name': 'Baby_Stroller.jpg', 'path': 'Baby_Stroller.jpg'},
    {'name': 'small lilliput robot.jpg', 'path': 'small lilliput robot.jpg'},
    {'name': 'Breeze_kayak_2.jpg', 'path': 'Breeze_kayak_2.jpg'},
    {'name': 'ADOG61.jpg', 'path': 'ADOG61.jpg'},
    {'name': 'Padlock_full.jpg', 'path': 'Padlock_full.jpg'},
    {'name': 'Cherry-Pie.jpg', 'path': 'Cherry-Pie.jpg'},
    {'name': 'Abowl50.jpg', 'path': 'Abowl50.jpg'},
    {'name': 'a00e7dbe-acad-41ed-b95d-6b5ffbbe4c9a_300.jpg', 'path': 'a00e7dbe-acad-41ed-b95d-6b5ffbbe4c9a_300.jpg'},
    {'name': 'AA Luffield Radial crescent Desk 1600mm x 1200mm.jpg', 'path': 'AA Luffield Radial crescent Desk 1600mm x 1200mm.jpg'},
    {'name': 'ROMSL1374.jpg', 'path': 'ROMSL1374.jpg'},
    {'name': 'ecolution_collarS.jpg', 'path': 'ecolution_collarS.jpg'},
    {'name': '7264122_ra.jpg', 'path': '7264122_ra.jpg'},
    {'name': 'p3677539dt.jpg', 'path': 'p3677539dt.jpg'},
    {'name': 'AGLOBE8.jpg', 'path': 'AGLOBE8.jpg'},
    {'name': 'cake-crop.jpg', 'path': 'cake-crop.jpg'},
    {'name': 'l_640045_s05_000.jpg', 'path': 'l_640045_s05_000.jpg'},
    {'name': 'AANKEY.jpg', 'path': 'AANKEY.jpg'},
    {'name': 'replacementbulb2.jpg', 'path': 'replacementbulb2.jpg'},
    {'name': 'AHANDBAG6.jpg', 'path': 'AHANDBAG6.jpg'},
    {'name': 'Brass scales uid.jpg', 'path': 'Brass scales uid.jpg'},
    {'name': 'MicrosoftTreoH4Web.jpg', 'path': 'MicrosoftTreoH4Web.jpg'},
    {'name': 'b2c_l_scd6550.jpg', 'path': 'b2c_l_scd6550.jpg'},
    {'name': 'Abottleopener.jpg', 'path': 'Abottleopener.jpg'},
    {'name': 'Multimedia_Speakers.jpg', 'path': 'Multimedia_Speakers.jpg'},
    {'name': 'laptopnew04.jpg', 'path': 'laptopnew04.jpg'},
    {'name': '1383_1749_popup copy.jpg', 'path': '1383_1749_popup copy.jpg'},
    {'name': '2120B_blue_floral_handkerchief.jpg', 'path': '2120B_blue_floral_handkerchief.jpg'},
    {'name': '042_0013.jpg', 'path': '042_0013.jpg'},
    {'name': 'ABIRDHO20.jpg', 'path': 'ABIRDHO20.jpg'},
    {'name': 'ATYPEWR46.jpg', 'path': 'ATYPEWR46.jpg'},
    {'name': '31sCvjMS3jL._SS500_.jpg', 'path': '31sCvjMS3jL._SS500_.jpg'},
    {'name': 'Abird22.jpg', 'path': 'Abird22.jpg'},
    {'name': 'unbranded-cumfilux-astral-3ft-mattress.jpg', 'path': 'unbranded-cumfilux-astral-3ft-mattress.jpg'},
    {'name': '79398-3-1-99.77F-K75-5-0013_320x320.jpg', 'path': '79398-3-1-99.77F-K75-5-0013_320x320.jpg'},
    {'name': '3060324930_XL.jpg', 'path': '3060324930_XL.jpg'},
    {'name': '009.-trashcan_lrg.jpg', 'path': '009.-trashcan_lrg.jpg'},
    {'name': 'LM8R.jpg', 'path': 'LM8R.jpg'},
    {'name': 'AMOTH28.jpg', 'path': 'AMOTH28.jpg'},
    {'name': '594.jpg', 'path': '594.jpg'},
    {'name': 'Aclock282.jpg', 'path': 'Aclock282.jpg'},
    {'name': 'speedbike.jpg', 'path': 'speedbike.jpg'},
    {'name': '230397853.jpg', 'path': '230397853.jpg'},
    {'name': 'motorola c115-thumb.jpg', 'path': 'motorola c115-thumb.jpg'},
    {'name': 'necklascenew04.jpg', 'path': 'necklascenew04.jpg'},
    {'name': 'p2740000dt.jpg', 'path': 'p2740000dt.jpg'},
    {'name': 'boucles_d_oreilles_bonchd_0203.jpg', 'path': 'boucles_d_oreilles_bonchd_0203.jpg'},
    {'name': 'ss30.jpg', 'path': 'ss30.jpg'},
    {'name': 'APACKME32.jpg', 'path': 'APACKME32.jpg'},
    {'name': '060621160348s.jpg', 'path': '060621160348s.jpg'},
    {'name': '091106micdroshred.jpg', 'path': '091106micdroshred.jpg'},
    {'name': 'socks-6780.jpg', 'path': 'socks-6780.jpg'},
    {'name': '269-200613-_DSC0873.jpg', 'path': '269-200613-_DSC0873.jpg'},
    {'name': 'BirdCage-19-single-on-white.jpg', 'path': 'BirdCage-19-single-on-white.jpg'},
    {'name': 'Apex_pcb.jpg', 'path': 'Apex_pcb.jpg'},
    {'name': 'spicerack1.jpg', 'path': 'spicerack1.jpg'},
    {'name': 'single flap.jpg', 'path': 'single flap.jpg'},
    {'name': '262597_fpx.jpg', 'path': '262597_fpx.jpg'},
    {'name': 'popmech2.jpg', 'path': 'popmech2.jpg'},
    {'name': 'colgate.jpg', 'path': 'colgate.jpg'},
    {'name': 'AREDCOUC5.jpg', 'path': 'AREDCOUC5.jpg'},
    {'name': 'img_9246-muffin.jpg', 'path': 'img_9246-muffin.jpg'},
    {'name': 'AWIG73.jpg', 'path': 'AWIG73.jpg'},
    {'name': 'ADUSTER5.jpg', 'path': 'ADUSTER5.jpg'},
    {'name': 'AROCK9.jpg', 'path': 'AROCK9.jpg'},
    {'name': 'p2363441dt.jpg', 'path': 'p2363441dt.jpg'},
    {'name': 'Amateur_ice_hockey_skates.jpg', 'path': 'Amateur_ice_hockey_skates.jpg'},
    {'name': 'APASTA.jpg', 'path': 'APASTA.jpg'},
    {'name': 'BROOM.jpg', 'path': 'BROOM.jpg'},
    {'name': '41K7QVRX50L._SS500_.jpg', 'path': '41K7QVRX50L._SS500_.jpg'},
    {'name': 'perfume5-b.jpg', 'path': 'perfume5-b.jpg'},
    {'name': 'Aspraybottle5.jpg', 'path': 'Aspraybottle5.jpg'},
    {'name': '51wbushUphL._AA262_.jpg', 'path': '51wbushUphL._AA262_.jpg'},
    {'name': '1639-large.jpg', 'path': '1639-large.jpg'},
    {'name': 'Abikini5.jpg', 'path': 'Abikini5.jpg'},
    {'name': 'devilsblue986.jpg', 'path': 'devilsblue986.jpg'},
    {'name': 'logitech-dinovo-edge.jpg', 'path': 'logitech-dinovo-edge.jpg'},
    {'name': 'APAINTBR6.jpg', 'path': 'APAINTBR6.jpg'},
    {'name': 'ALAMP19.jpg', 'path': 'ALAMP19.jpg'},
    {'name': '31C46AWYS7L._AA280_.jpg', 'path': '31C46AWYS7L._AA280_.jpg'},
    {'name': 'joy011.jpg', 'path': 'joy011.jpg'},
    {'name': 'ADRESSE43.jpg', 'path': 'ADRESSE43.jpg'},
    {'name': 'ACHEESGR4.jpg', 'path': 'ACHEESGR4.jpg'},
    {'name': 'Yellow-Kettle.jpg', 'path': 'Yellow-Kettle.jpg'},
    {'name': 'ATRACTOR6.jpg', 'path': 'ATRACTOR6.jpg'},
    {'name': 'matzah.jpg', 'path': 'matzah.jpg'},
    {'name': 'francisfrancisx1-coffee-maker.jpg', 'path': 'francisfrancisx1-coffee-maker.jpg'},
    {'name': 'blackandtan.jpg', 'path': 'blackandtan.jpg'},
    {'name': 'candy 66.jpg', 'path': 'candy 66.jpg'},
    {'name': 'pipe52.jpg', 'path': 'pipe52.jpg'},
    {'name': 'exact.jpg', 'path': 'exact.jpg'},
    {'name': 'mom_quilt.jpg', 'path': 'mom_quilt.jpg'},
    {'name': 'potatochips2.jpg', 'path': 'potatochips2.jpg'},
    {'name': 'Atoycoil.jpg', 'path': 'Atoycoil.jpg'},
    {'name': 'ALEI16.jpg', 'path': 'ALEI16.jpg'},
    {'name': 'Red Canyon Tent.jpg', 'path': 'Red Canyon Tent.jpg'},
    {'name': '3ce51135-ecf8-4172-82d1-528e7fe6edf6_300.jpg', 'path': '3ce51135-ecf8-4172-82d1-528e7fe6edf6_300.jpg'},
    {'name': 'cr89bt.jpg', 'path': 'cr89bt.jpg'},
    {'name': 'Spout_bottle_opener.jpg', 'path': 'Spout_bottle_opener.jpg'},
    {'name': 'ACUSHIO26.jpg', 'path': 'ACUSHIO26.jpg'},
    {'name': 'ABOWARRO4.jpg', 'path': 'ABOWARRO4.jpg'},
    {'name': '7450-Pro-Gloves-Long-Back.jpg', 'path': '7450-Pro-Gloves-Long-Back.jpg'},
    {'name': '7424557_sa.jpg', 'path': '7424557_sa.jpg'},
    {'name': 'TOY-010.jpg', 'path': 'TOY-010.jpg'},
    {'name': 'ABINOCU53.jpg', 'path': 'ABINOCU53.jpg'},
    {'name': '11193-large.jpg', 'path': '11193-large.jpg'},
    {'name': 'folding_bike_dahon.jpg', 'path': 'folding_bike_dahon.jpg'},
    {'name': 'Life-Fitness-C1-5-Upright-Exercise-Bike.jpg', 'path': 'Life-Fitness-C1-5-Upright-Exercise-Bike.jpg'},
    {'name': '26461874.thl.jpg', 'path': '26461874.thl.jpg'},
    {'name': 'AGREENHAT.jpg', 'path': 'AGREENHAT.jpg'},
    {'name': '132005.jpg', 'path': '132005.jpg'},
    {'name': 'roquefort.jpg', 'path': 'roquefort.jpg'},
    {'name': 'CashRegister.jpg', 'path': 'CashRegister.jpg'},
    {'name': 'henrybar_stool1.jpg', 'path': 'henrybar_stool1.jpg'},
    {'name': 'Agardeninghoe.jpg', 'path': 'Agardeninghoe.jpg'},
    {'name': '22864488.thl.jpg', 'path': '22864488.thl.jpg'},
    {'name': 'parfait.jpg', 'path': 'parfait.jpg'},
    {'name': 'APITCHER8.jpg', 'path': 'APITCHER8.jpg'},
    {'name': 'SleepingCherubOnShell32004.jpg', 'path': 'SleepingCherubOnShell32004.jpg'},
    {'name': 'hawaiian_shirt_corvette_panel_rd_pf.jpg', 'path': 'hawaiian_shirt_corvette_panel_rd_pf.jpg'},
    {'name': '1975hunter.jpg', 'path': '1975hunter.jpg'},
    {'name': '101643b_l.jpg', 'path': '101643b_l.jpg'},
    {'name': 'Avase106.jpg', 'path': 'Avase106.jpg'},
    {'name': 'Aspoolofstrin.jpg', 'path': 'Aspoolofstrin.jpg'},
    {'name': 'SimplyChickHeadband32.jpg', 'path': 'SimplyChickHeadband32.jpg'},
    {'name': 'train9.jpg', 'path': 'train9.jpg'},
    {'name': 'Salt_Pepper_Mills_Sets.jpg', 'path': 'Salt_Pepper_Mills_Sets.jpg'},
    {'name': 'teddybear_1.jpg', 'path': 'teddybear_1.jpg'},
    {'name': 'ALIGHTE24.jpg', 'path': 'ALIGHTE24.jpg'},
    {'name': 'ALADYMUG2.jpg', 'path': 'ALADYMUG2.jpg'},
    {'name': 'hammernew03.jpg', 'path': 'hammernew03.jpg'},
    {'name': 'APILLS5.jpg', 'path': 'APILLS5.jpg'},
    {'name': 'ocadia11if.jpg', 'path': 'ocadia11if.jpg'},
    {'name': 'handle1.jpg', 'path': 'handle1.jpg'},
    {'name': 'folding_screens_retablo_d.jpg', 'path': 'folding_screens_retablo_d.jpg'},
    {'name': 'c8d48476-f185-4481-a124-4bb1d5c84793_300.jpg', 'path': 'c8d48476-f185-4481-a124-4bb1d5c84793_300.jpg'},
    {'name': 'coffre 2.jpg', 'path': 'coffre 2.jpg'},
    {'name': 'BOOT.jpg', 'path': 'BOOT.jpg'},
    {'name': 'p_NOR8121.jpg', 'path': 'p_NOR8121.jpg'},
    {'name': 'XVOFN.jpg', 'path': 'XVOFN.jpg'},
    {'name': 'ABELGFLAG.jpg', 'path': 'ABELGFLAG.jpg'},
    {'name': '59df2ab2-780a-4c04-ac8b-c1573ae078c4_300.jpg', 'path': '59df2ab2-780a-4c04-ac8b-c1573ae078c4_300.jpg'},
    {'name': 'Ultra-Short-pacific-blue400.jpg', 'path': 'Ultra-Short-pacific-blue400.jpg'},
    {'name': 'ALEAF54.jpg', 'path': 'ALEAF54.jpg'},
    {'name': 'AEARPHON6.jpg', 'path': 'AEARPHON6.jpg'},
    {'name': 'donut.jpg', 'path': 'donut.jpg'},
    {'name': '41XJB9YZ93L._SS384_.jpg', 'path': '41XJB9YZ93L._SS384_.jpg'},
    {'name': 'il-423-3784.jpg', 'path': 'il-423-3784.jpg'},
    {'name': 'Aroadsignin16.jpg', 'path': 'Aroadsignin16.jpg'},
    {'name': 'ACANDLE24.jpg', 'path': 'ACANDLE24.jpg'},
    {'name': 'caddycaddy.jpg', 'path': 'caddycaddy.jpg'},
    {'name': 'AHORSHOE4.jpg', 'path': 'AHORSHOE4.jpg'},
    {'name': 'a7b18beb-0ddd-4970-8618-53ccccd5950b_300.jpg', 'path': 'a7b18beb-0ddd-4970-8618-53ccccd5950b_300.jpg'},
    {'name': '22824636.thl.jpg', 'path': '22824636.thl.jpg'},
    {'name': '209170485_34857e863d_o.jpg', 'path': '209170485_34857e863d_o.jpg'},
    {'name': 'Starfish01N.jpg', 'path': 'Starfish01N.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': '_ds400-500.jpg', 'path': '_ds400-500.jpg'},
    {'name': '2AFC_1.xlsx', 'path': '2AFC_1.xlsx'},
    {'name': '3ce51135-ecf8-4172-82d1-528e7fe6edf6_300.jpg', 'path': '3ce51135-ecf8-4172-82d1-528e7fe6edf6_300.jpg'},
    {'name': '3D_Design_Toilet_Seat.jpg', 'path': '3D_Design_Toilet_Seat.jpg'},
    {'name': '3POpez.jpg', 'path': '3POpez.jpg'},
    {'name': '05_05ring.jpg', 'path': '05_05ring.jpg'},
    {'name': '5_Lister_Bandage_Scissor.jpg', 'path': '5_Lister_Bandage_Scissor.jpg'},
    {'name': '06 DP Horseshoe_wback.jpg', 'path': '06 DP Horseshoe_wback.jpg'},
    {'name': '6c3c44f0-41f2-41fa-831e-2b89123d0236_300.jpg', 'path': '6c3c44f0-41f2-41fa-831e-2b89123d0236_300.jpg'},
    {'name': '7deb399f-d20d-417c-94df-20b613aa3743_300.jpg', 'path': '7deb399f-d20d-417c-94df-20b613aa3743_300.jpg'},
    {'name': '8a8aacfa-d0d4-48b4-883d-effc8c11bac5.jpg', 'path': '8a8aacfa-d0d4-48b4-883d-effc8c11bac5.jpg'},
    {'name': '009.-trashcan_lrg.jpg', 'path': '009.-trashcan_lrg.jpg'},
    {'name': '27collectibels_corset-743091.jpg', 'path': '27collectibels_corset-743091.jpg'},
    {'name': '31C46AWYS7L._AA280_.jpg', 'path': '31C46AWYS7L._AA280_.jpg'},
    {'name': '31FH4H8V33L._SS500_.jpg', 'path': '31FH4H8V33L._SS500_.jpg'},
    {'name': '31sCvjMS3jL._SS500_.jpg', 'path': '31sCvjMS3jL._SS500_.jpg'},
    {'name': '40.jpg', 'path': '40.jpg'},
    {'name': '41AWBNXQRML._AA262_.jpg', 'path': '41AWBNXQRML._AA262_.jpg'},
    {'name': '41K7QVRX50L._SS500_.jpg', 'path': '41K7QVRX50L._SS500_.jpg'},
    {'name': '41TBS5KP5YL._SS384_.jpg', 'path': '41TBS5KP5YL._SS384_.jpg'},
    {'name': '41tExEsn-gL._AA262_.jpg', 'path': '41tExEsn-gL._AA262_.jpg'},
    {'name': '41XJB9YZ93L._SS384_.jpg', 'path': '41XJB9YZ93L._SS384_.jpg'},
    {'name': '042_0013.jpg', 'path': '042_0013.jpg'},
    {'name': '042_0044.jpg', 'path': '042_0044.jpg'},
    {'name': '51wbushUphL._AA262_.jpg', 'path': '51wbushUphL._AA262_.jpg'},
    {'name': '59df2ab2-780a-4c04-ac8b-c1573ae078c4_300.jpg', 'path': '59df2ab2-780a-4c04-ac8b-c1573ae078c4_300.jpg'},
    {'name': '69d21be1-3163-4aef-aacd-df4baeab9701_300.jpg', 'path': '69d21be1-3163-4aef-aacd-df4baeab9701_300.jpg'},
    {'name': '160_0057.jpg', 'path': '160_0057.jpg'},
    {'name': '199bdf21-a774-40d1-ab0c-55f50090a670_300.jpg', 'path': '199bdf21-a774-40d1-ab0c-55f50090a670_300.jpg'},
    {'name': '269-200613-_DSC0873.jpg', 'path': '269-200613-_DSC0873.jpg'},
    {'name': '412LSlnRxjL._SS500_.jpg', 'path': '412LSlnRxjL._SS500_.jpg'},
    {'name': '412YZ25RFBL._AA262_.jpg', 'path': '412YZ25RFBL._AA262_.jpg'},
    {'name': '594.jpg', 'path': '594.jpg'},
    {'name': '647dd095-b0f5-4824-88a8-a457c0bb1f72_300.jpg', 'path': '647dd095-b0f5-4824-88a8-a457c0bb1f72_300.jpg'},
    {'name': '712_toothbrush.jpg', 'path': '712_toothbrush.jpg'},
    {'name': '1342_bialy_large.jpg', 'path': '1342_bialy_large.jpg'},
    {'name': '1383_1749_popup copy.jpg', 'path': '1383_1749_popup copy.jpg'},
    {'name': '1639-large.jpg', 'path': '1639-large.jpg'},
    {'name': '1975hunter.jpg', 'path': '1975hunter.jpg'},
    {'name': '2000-4684_M.jpg', 'path': '2000-4684_M.jpg'},
    {'name': '2120B_blue_floral_handkerchief.jpg', 'path': '2120B_blue_floral_handkerchief.jpg'},
    {'name': '2592!36-4867391.jpg', 'path': '2592!36-4867391.jpg'},
    {'name': '3090-b.jpg', 'path': '3090-b.jpg'},
    {'name': '4600.jpg', 'path': '4600.jpg'},
    {'name': '7450-Pro-Gloves-Long-Back.jpg', 'path': '7450-Pro-Gloves-Long-Back.jpg'},
    {'name': '7638ba9f-1b10-4b95-982a-95c57e784739_400.jpg', 'path': '7638ba9f-1b10-4b95-982a-95c57e784739_400.jpg'},
    {'name': '8700rDeviceHomeRibbonFull.JPG', 'path': '8700rDeviceHomeRibbonFull.JPG'},
    {'name': '9001.jpg', 'path': '9001.jpg'},
    {'name': '11193-large.jpg', 'path': '11193-large.jpg'},
    {'name': '15265.jpg', 'path': '15265.jpg'},
    {'name': '22683.jpg', 'path': '22683.jpg'},
    {'name': '040115_gadgets_razor_hmed10a.hmedium.jpg', 'path': '040115_gadgets_razor_hmed10a.hmedium.jpg'},
    {'name': '060350.jpg', 'path': '060350.jpg'},
    {'name': '79398-3-1-99.77F-K75-5-0013_320x320.jpg', 'path': '79398-3-1-99.77F-K75-5-0013_320x320.jpg'},
    {'name': '091106micdroshred.jpg', 'path': '091106micdroshred.jpg'},
    {'name': '100778.jpg', 'path': '100778.jpg'},
    {'name': '101643b_l.jpg', 'path': '101643b_l.jpg'},
    {'name': '132005.jpg', 'path': '132005.jpg'},
    {'name': '262597_fpx.jpg', 'path': '262597_fpx.jpg'},
    {'name': '465088.jpg', 'path': '465088.jpg'},
    {'name': '0604100L.jpg', 'path': '0604100L.jpg'},
    {'name': '746160.jpg', 'path': '746160.jpg'},
    {'name': '5965002_ra.jpg', 'path': '5965002_ra.jpg'},
    {'name': '6700720A63UC158331M.jpg', 'path': '6700720A63UC158331M.jpg'},
    {'name': '7256426_ra.jpg', 'path': '7256426_ra.jpg'},
    {'name': '7264122_ra.jpg', 'path': '7264122_ra.jpg'},
    {'name': '7424557_sa.jpg', 'path': '7424557_sa.jpg'},
    {'name': '7666821_ra.jpg', 'path': '7666821_ra.jpg'},
    {'name': '7760719_sa.jpg', 'path': '7760719_sa.jpg'},
    {'name': '8020932.thl.jpg', 'path': '8020932.thl.jpg'},
    {'name': '9817230.thl.jpg', 'path': '9817230.thl.jpg'},
    {'name': '22824636.thl.jpg', 'path': '22824636.thl.jpg'},
    {'name': '22864488.thl.jpg', 'path': '22864488.thl.jpg'},
    {'name': '26388357.thl.jpg', 'path': '26388357.thl.jpg'},
    {'name': '26461874.thl.jpg', 'path': '26461874.thl.jpg'},
    {'name': '26467374.thl.jpg', 'path': '26467374.thl.jpg'},
    {'name': '35312239.thl.jpg', 'path': '35312239.thl.jpg'},
    {'name': '35312253.thl.jpg', 'path': '35312253.thl.jpg'},
    {'name': '83266516_6dc38dd6d2.jpg', 'path': '83266516_6dc38dd6d2.jpg'},
    {'name': '209170485_34857e863d_o.jpg', 'path': '209170485_34857e863d_o.jpg'},
    {'name': '230397853.jpg', 'path': '230397853.jpg'},
    {'name': '1078390905.jpg', 'path': '1078390905.jpg'},
    {'name': '1167776528_Singer-7466.jpg', 'path': '1167776528_Singer-7466.jpg'},
    {'name': '3060324930_XL.jpg', 'path': '3060324930_XL.jpg'},
    {'name': '04922349088.jpg', 'path': '04922349088.jpg'},
    {'name': '04922357088.jpg', 'path': '04922357088.jpg'},
    {'name': '049881410001.jpg', 'path': '049881410001.jpg'},
    {'name': '060621160348s.jpg', 'path': '060621160348s.jpg'},
    {'name': '2003071700080406.jpg', 'path': '2003071700080406.jpg'},
    {'name': 'a00e7dbe-acad-41ed-b95d-6b5ffbbe4c9a_300.jpg', 'path': 'a00e7dbe-acad-41ed-b95d-6b5ffbbe4c9a_300.jpg'},
    {'name': 'A1DOLLAR.jpg', 'path': 'A1DOLLAR.jpg'},
    {'name': 'A1KEY.jpg', 'path': 'A1KEY.jpg'},
    {'name': 'A4LEFTKEY.jpg', 'path': 'A4LEFTKEY.jpg'},
    {'name': 'A6DOMINO.jpg', 'path': 'A6DOMINO.jpg'},
    {'name': 'a7b18beb-0ddd-4970-8618-53ccccd5950b_300.jpg', 'path': 'a7b18beb-0ddd-4970-8618-53ccccd5950b_300.jpg'},
    {'name': 'A8DOMINO2.jpg', 'path': 'A8DOMINO2.jpg'},
    {'name': 'AA Luffield Radial crescent Desk 1600mm x 1200mm.jpg', 'path': 'AA Luffield Radial crescent Desk 1600mm x 1200mm.jpg'},
    {'name': 'AALTIRE.jpg', 'path': 'AALTIRE.jpg'},
    {'name': 'AANKEY.jpg', 'path': 'AANKEY.jpg'},
    {'name': 'Aapple34.jpg', 'path': 'Aapple34.jpg'},
    {'name': 'ab44.jpg', 'path': 'ab44.jpg'},
    {'name': 'ab52.jpg', 'path': 'ab52.jpg'},
    {'name': 'Abackpack8.jpg', 'path': 'Abackpack8.jpg'},
    {'name': 'Abackpack31.jpg', 'path': 'Abackpack31.jpg'},
    {'name': 'ABARREL3.jpg', 'path': 'ABARREL3.jpg'},
    {'name': 'Abasket56.jpg', 'path': 'Abasket56.jpg'},
    {'name': 'ABELGFLAG.jpg', 'path': 'ABELGFLAG.jpg'},
    {'name': 'ABELL3.jpg', 'path': 'ABELL3.jpg'},
    {'name': 'ABELL31.jpg', 'path': 'ABELL31.jpg'},
    {'name': 'Abikini5.jpg', 'path': 'Abikini5.jpg'},
    {'name': 'Abikini8.jpg', 'path': 'Abikini8.jpg'},
    {'name': 'ABINOCU53.jpg', 'path': 'ABINOCU53.jpg'},
    {'name': 'ABINOCULA.jpg', 'path': 'ABINOCULA.jpg'},
    {'name': 'Abird22.jpg', 'path': 'Abird22.jpg'},
    {'name': 'Abird26.jpg', 'path': 'Abird26.jpg'},
    {'name': 'ABIRDCA10.jpg', 'path': 'ABIRDCA10.jpg'},
    {'name': 'ABIRDHO20.jpg', 'path': 'ABIRDHO20.jpg'},
    {'name': 'ABIRDHO27.jpg', 'path': 'ABIRDHO27.jpg'},
    {'name': 'ABONGO6.jpg', 'path': 'ABONGO6.jpg'},
    {'name': 'ABONGO22.jpg', 'path': 'ABONGO22.jpg'},
    {'name': 'ABONZAI23.jpg', 'path': 'ABONZAI23.jpg'},
    {'name': 'Abottle52.jpg', 'path': 'Abottle52.jpg'},
    {'name': 'Abottle96.jpg', 'path': 'Abottle96.jpg'},
    {'name': 'Abottleopener.jpg', 'path': 'Abottleopener.jpg'},
    {'name': 'ABOWARRO4.jpg', 'path': 'ABOWARRO4.jpg'},
    {'name': 'Abowl50.jpg', 'path': 'Abowl50.jpg'},
    {'name': 'Abowl59.jpg', 'path': 'Abowl59.jpg'},
    {'name': 'ABUTTFL15.jpg', 'path': 'ABUTTFL15.jpg'},
    {'name': 'ACAMERA29.jpg', 'path': 'ACAMERA29.jpg'},
    {'name': 'ACANDFLO3.jpg', 'path': 'ACANDFLO3.jpg'},
    {'name': 'ACANDLE24.jpg', 'path': 'ACANDLE24.jpg'},
    {'name': 'ACATPLAY5.jpg', 'path': 'ACATPLAY5.jpg'},
    {'name': 'ACHEESGR4.jpg', 'path': 'ACHEESGR4.jpg'},
    {'name': 'Aclock213.jpg', 'path': 'Aclock213.jpg'},
    {'name': 'Aclock282.jpg', 'path': 'Aclock282.jpg'},
    {'name': 'ACOIN6.jpg', 'path': 'ACOIN6.jpg'},
    {'name': 'Acookingpan6.jpg', 'path': 'Acookingpan6.jpg'},
    {'name': 'ACOOKPO14.jpg', 'path': 'ACOOKPO14.jpg'},
    {'name': 'ACOOKPO56.jpg', 'path': 'ACOOKPO56.jpg'},
    {'name': 'ACOUCH14.jpg', 'path': 'ACOUCH14.jpg'},
    {'name': 'ACUSHIO26.jpg', 'path': 'ACUSHIO26.jpg'},
    {'name': 'Acushion13.jpg', 'path': 'Acushion13.jpg'},
    {'name': 'ADOG51.jpg', 'path': 'ADOG51.jpg'},
    {'name': 'ADOG61.jpg', 'path': 'ADOG61.jpg'},
    {'name': 'ADOLL158.jpg', 'path': 'ADOLL158.jpg'},
    {'name': 'ADOLL169.jpg', 'path': 'ADOLL169.jpg'},
    {'name': 'ADRESSE40.jpg', 'path': 'ADRESSE40.jpg'},
    {'name': 'ADRESSE43.jpg', 'path': 'ADRESSE43.jpg'},
    {'name': 'ADUSTER5.jpg', 'path': 'ADUSTER5.jpg'},
    {'name': 'ADUSTER7.jpg', 'path': 'ADUSTER7.jpg'},
    {'name': 'AEARPHON6.jpg', 'path': 'AEARPHON6.jpg'},
    {'name': 'AELCGUI12.jpg', 'path': 'AELCGUI12.jpg'},
    {'name': 'AELECGUI5.jpg', 'path': 'AELECGUI5.jpg'},
    {'name': 'Afeather12.jpg', 'path': 'Afeather12.jpg'},
    {'name': 'AFG Amy 4 in 1 Convertible Crib.jpg', 'path': 'AFG Amy 4 in 1 Convertible Crib.jpg'},
    {'name': 'AFIREPLA2.jpg', 'path': 'AFIREPLA2.jpg'},
    {'name': 'AFIREPLA4.jpg', 'path': 'AFIREPLA4.jpg'},
    {'name': 'AFISHBOW2.jpg', 'path': 'AFISHBOW2.jpg'},
    {'name': 'AFISHLU5.jpg', 'path': 'AFISHLU5.jpg'},
    {'name': 'AFISHLUR7.jpg', 'path': 'AFISHLUR7.jpg'},
    {'name': 'AFRAME138.jpg', 'path': 'AFRAME138.jpg'},
    {'name': 'AFRAME139.jpg', 'path': 'AFRAME139.jpg'},
    {'name': 'Agardeninghoe.jpg', 'path': 'Agardeninghoe.jpg'},
    {'name': 'Agardeningsho.jpg', 'path': 'Agardeningsho.jpg'},
    {'name': 'AGLOBE6.jpg', 'path': 'AGLOBE6.jpg'},
    {'name': 'AGLOBE8.jpg', 'path': 'AGLOBE8.jpg'},
    {'name': 'AGOLDEA17.jpg', 'path': 'AGOLDEA17.jpg'},
    {'name': 'Agoldfishswi8.jpg', 'path': 'Agoldfishswi8.jpg'},
    {'name': 'AGREENHAT.jpg', 'path': 'AGREENHAT.jpg'},
    {'name': 'AHANDBAG6.jpg', 'path': 'AHANDBAG6.jpg'},
    {'name': 'Ahorn21.jpg', 'path': 'Ahorn21.jpg'},
    {'name': 'Ahorn30.jpg', 'path': 'Ahorn30.jpg'},
    {'name': 'AHORSHOE4.jpg', 'path': 'AHORSHOE4.jpg'},
    {'name': 'AJACKOL22.jpg', 'path': 'AJACKOL22.jpg'},
    {'name': 'Akettle85.jpg', 'path': 'Akettle85.jpg'},
    {'name': 'AKEY12.jpg', 'path': 'AKEY12.jpg'},
    {'name': 'ALADYMUG2.jpg', 'path': 'ALADYMUG2.jpg'},
    {'name': 'ALAMP19.jpg', 'path': 'ALAMP19.jpg'},
    {'name': 'Alamp102.jpg', 'path': 'Alamp102.jpg'},
    {'name': 'ALEAF38.jpg', 'path': 'ALEAF38.jpg'},
    {'name': 'ALEAF54.jpg', 'path': 'ALEAF54.jpg'},
    {'name': 'ALEI16.jpg', 'path': 'ALEI16.jpg'},
    {'name': 'ALIGHTE24.jpg', 'path': 'ALIGHTE24.jpg'},
    {'name': 'ALIGHTE25.jpg', 'path': 'ALIGHTE25.jpg'},
    {'name': 'ALOG6.jpg', 'path': 'ALOG6.jpg'},
    {'name': 'ALOG7.jpg', 'path': 'ALOG7.jpg'},
    {'name': 'ALONGCAT2.jpg', 'path': 'ALONGCAT2.jpg'},
    {'name': 'Alunchbox90.jpg', 'path': 'Alunchbox90.jpg'},
    {'name': 'Alunchbox115.jpg', 'path': 'Alunchbox115.jpg'},
    {'name': 'Amanualfan3.jpg', 'path': 'Amanualfan3.jpg'},
    {'name': 'Amanualfan16.jpg', 'path': 'Amanualfan16.jpg'},
    {'name': 'Amateur_ice_hockey_skates.jpg', 'path': 'Amateur_ice_hockey_skates.jpg'},
    {'name': 'AMOTH28.jpg', 'path': 'AMOTH28.jpg'},
    {'name': 'Amug21.jpg', 'path': 'Amug21.jpg'},
    {'name': 'AMUSICSTA.jpg', 'path': 'AMUSICSTA.jpg'},
    {'name': 'AMUSTAND7.jpg', 'path': 'AMUSTAND7.jpg'},
    {'name': 'AOKA.jpg', 'path': 'AOKA.jpg'},
    {'name': 'AORITABLE.jpg', 'path': 'AORITABLE.jpg'},
    {'name': 'AORITABLS.jpg', 'path': 'AORITABLS.jpg'},
    {'name': 'APACKME32.jpg', 'path': 'APACKME32.jpg'},
    {'name': 'APACKME42.jpg', 'path': 'APACKME42.jpg'},
    {'name': 'APADLOCK.jpg', 'path': 'APADLOCK.jpg'},
    {'name': 'APAINTB34.jpg', 'path': 'APAINTB34.jpg'},
    {'name': 'APAINTBR6.jpg', 'path': 'APAINTBR6.jpg'},
    {'name': 'APALMRTEE.jpg', 'path': 'APALMRTEE.jpg'},
    {'name': 'APASTA.jpg', 'path': 'APASTA.jpg'},
    {'name': 'APASTA20.jpg', 'path': 'APASTA20.jpg'},
    {'name': 'APDB.jpg', 'path': 'APDB.jpg'},
    {'name': 'Apencilshar13.jpg', 'path': 'Apencilshar13.jpg'},
    {'name': 'Apex_pcb.jpg', 'path': 'Apex_pcb.jpg'},
    {'name': 'APIESERV2.jpg', 'path': 'APIESERV2.jpg'},
    {'name': 'APIESERV3.jpg', 'path': 'APIESERV3.jpg'},
    {'name': 'APILLS5.jpg', 'path': 'APILLS5.jpg'},
    {'name': 'APILLS8.jpg', 'path': 'APILLS8.jpg'},
    {'name': 'APINETREE.jpg', 'path': 'APINETREE.jpg'},
    {'name': 'APITCHER8.jpg', 'path': 'APITCHER8.jpg'},
    {'name': 'Apitcher25.jpg', 'path': 'Apitcher25.jpg'},
    {'name': 'APLANT6.jpg', 'path': 'APLANT6.jpg'},
    {'name': 'APLANT14.jpg', 'path': 'APLANT14.jpg'},
    {'name': 'Aredapple5.jpg', 'path': 'Aredapple5.jpg'},
    {'name': 'AREDCOUC5.jpg', 'path': 'AREDCOUC5.jpg'},
    {'name': 'AREDHAT4.jpg', 'path': 'AREDHAT4.jpg'},
    {'name': 'Aroadsignin16.jpg', 'path': 'Aroadsignin16.jpg'},
    {'name': 'AROCK9.jpg', 'path': 'AROCK9.jpg'},
    {'name': 'Arock90.jpg', 'path': 'Arock90.jpg'},
    {'name': 'Arollofstrin2.jpg', 'path': 'Arollofstrin2.jpg'},
    {'name': 'ASALTPEPP.jpg', 'path': 'ASALTPEPP.jpg'},
    {'name': 'ASEASHE17.jpg', 'path': 'ASEASHE17.jpg'},
    {'name': 'aspirateur-bassin.jpg', 'path': 'aspirateur-bassin.jpg'},
    {'name': 'Aspoolofstrin.jpg', 'path': 'Aspoolofstrin.jpg'},
    {'name': 'Aspraybottle5.jpg', 'path': 'Aspraybottle5.jpg'},
    {'name': 'Aspraybottle6.jpg', 'path': 'Aspraybottle6.jpg'},
    {'name': 'ASTOOL23.jpg', 'path': 'ASTOOL23.jpg'},
    {'name': 'astro scout.jpg', 'path': 'astro scout.jpg'},
    {'name': 'ATOGOFLAG.jpg', 'path': 'ATOGOFLAG.jpg'},
    {'name': 'ATONGS.jpg', 'path': 'ATONGS.jpg'},
    {'name': 'Atoothbrush3.jpg', 'path': 'Atoothbrush3.jpg'},
    {'name': 'Atoycoil.jpg', 'path': 'Atoycoil.jpg'},
    {'name': 'ATRACTO39.jpg', 'path': 'ATRACTO39.jpg'},
    {'name': 'ATRACTOR6.jpg', 'path': 'ATRACTOR6.jpg'},
    {'name': 'Atrafficsign2.jpg', 'path': 'Atrafficsign2.jpg'},
    {'name': 'ATRUNK16.jpg', 'path': 'ATRUNK16.jpg'},
    {'name': 'ATYPEWR46.jpg', 'path': 'ATYPEWR46.jpg'},
    {'name': 'ATYPEWR56.jpg', 'path': 'ATYPEWR56.jpg'},
    {'name': 'Avase106.jpg', 'path': 'Avase106.jpg'},
    {'name': 'Avase143.jpg', 'path': 'Avase143.jpg'},
    {'name': 'Awickerbask21.jpg', 'path': 'Awickerbask21.jpg'},
    {'name': 'AWIG7.jpg', 'path': 'AWIG7.jpg'},
    {'name': 'AWIG73.jpg', 'path': 'AWIG73.jpg'},
    {'name': 'Awomansshoe.jpg', 'path': 'Awomansshoe.jpg'},
    {'name': 'AWSHOES4.jpg', 'path': 'AWSHOES4.jpg'},
    {'name': 'B0000C7AYO.02.LZZZZZZZ.jpg', 'path': 'B0000C7AYO.02.LZZZZZZZ.jpg'},
    {'name': 'B000BHICM0.01._AA280_SCLZZZZZZZ_.jpg', 'path': 'B000BHICM0.01._AA280_SCLZZZZZZZ_.jpg'},
    {'name': 'b2c_l_scd6550.jpg', 'path': 'b2c_l_scd6550.jpg'},
    {'name': 'B00005OONH.01.LZZZZZZZ.jpg', 'path': 'B00005OONH.01.LZZZZZZZ.jpg'},
    {'name': 'ba9988fd-9041-4b74-9cfb-06dde69e373e_300.jpg', 'path': 'ba9988fd-9041-4b74-9cfb-06dde69e373e_300.jpg'},
    {'name': 'Baby_Stroller.jpg', 'path': 'Baby_Stroller.jpg'},
    {'name': 'babyant_1966_1034199.jpg', 'path': 'babyant_1966_1034199.jpg'},
    {'name': 'baylor.JPG', 'path': 'baylor.JPG'},
    {'name': 'best_twin_tall.jpg', 'path': 'best_twin_tall.jpg'},
    {'name': 'BirdCage-19-single-on-white.jpg', 'path': 'BirdCage-19-single-on-white.jpg'},
    {'name': 'blackandtan.jpg', 'path': 'blackandtan.jpg'},
    {'name': 'BOOT.jpg', 'path': 'BOOT.jpg'},
    {'name': 'boucles_d_oreilles_bonchd_0203.jpg', 'path': 'boucles_d_oreilles_bonchd_0203.jpg'},
    {'name': 'Brass scales uid.jpg', 'path': 'Brass scales uid.jpg'},
    {'name': 'Breeze_kayak_2.jpg', 'path': 'Breeze_kayak_2.jpg'},
    {'name': 'BROOM.jpg', 'path': 'BROOM.jpg'},
    {'name': 'broom_industrial.jpg', 'path': 'broom_industrial.jpg'},
    {'name': 'BWNewsImage535281.jpg', 'path': 'BWNewsImage535281.jpg'},
    {'name': 'c8d48476-f185-4481-a124-4bb1d5c84793_300.jpg', 'path': 'c8d48476-f185-4481-a124-4bb1d5c84793_300.jpg'},
    {'name': 'caddycaddy.jpg', 'path': 'caddycaddy.jpg'},
    {'name': 'cake-crop.jpg', 'path': 'cake-crop.jpg'},
    {'name': 'Canaletti Gray 1.JPG', 'path': 'Canaletti Gray 1.JPG'},
    {'name': 'candy 66.jpg', 'path': 'candy 66.jpg'},
    {'name': 'candy 132.jpg', 'path': 'candy 132.jpg'},
    {'name': 'CashRegister.jpg', 'path': 'CashRegister.jpg'},
    {'name': 'CashRegMedium.jpg', 'path': 'CashRegMedium.jpg'},
    {'name': 'cassette-tape-1.jpg', 'path': 'cassette-tape-1.jpg'},
    {'name': 'Cemco_45lb_dumbbell_medium.jpg', 'path': 'Cemco_45lb_dumbbell_medium.jpg'},
    {'name': 'Cherry-Pie.jpg', 'path': 'Cherry-Pie.jpg'},
    {'name': 'cle-USB-baladeur-MP3-KXB-256.jpg', 'path': 'cle-USB-baladeur-MP3-KXB-256.jpg'},
    {'name': 'clinom1.jpg', 'path': 'clinom1.jpg'},
    {'name': 'coat-tree.jpg', 'path': 'coat-tree.jpg'},
    {'name': 'cobra80.jpg', 'path': 'cobra80.jpg'},
    {'name': 'coffre 2.jpg', 'path': 'coffre 2.jpg'},
    {'name': 'colgate.jpg', 'path': 'colgate.jpg'},
    {'name': 'copperpan10.jpg', 'path': 'copperpan10.jpg'},
    {'name': 'corkscrew.jpg', 'path': 'corkscrew.jpg'},
    {'name': 'cowgirlpin_big.jpg', 'path': 'cowgirlpin_big.jpg'},
    {'name': 'cr89bt.jpg', 'path': 'cr89bt.jpg'},
    {'name': 'cracker.snack.bread.jpg', 'path': 'cracker.snack.bread.jpg'},
    {'name': 'D-1 Four drawers desk Elm 64x23x33.jpg', 'path': 'D-1 Four drawers desk Elm 64x23x33.jpg'},
    {'name': 'DAD5508L.jpg', 'path': 'DAD5508L.jpg'},
    {'name': 'DCS315 Camera.jpg', 'path': 'DCS315 Camera.jpg'},
    {'name': 'dealerImage_843.jpg', 'path': 'dealerImage_843.jpg'},
    {'name': 'detroit-tape-livepics-cass.jpg', 'path': 'detroit-tape-livepics-cass.jpg'},
    {'name': 'devilsblue986.jpg', 'path': 'devilsblue986.jpg'},
    {'name': 'doll-house-4-7in.jpg', 'path': 'doll-house-4-7in.jpg'},
    {'name': 'donut.jpg', 'path': 'donut.jpg'},
    {'name': 'draggold.jpg', 'path': 'draggold.jpg'},
    {'name': 'DSC00961.JPG', 'path': 'DSC00961.JPG'},
    {'name': 'ecolution_collarS.jpg', 'path': 'ecolution_collarS.jpg'},
    {'name': 'ecs.jpg', 'path': 'ecs.jpg'},
    {'name': 'ehs.jpg', 'path': 'ehs.jpg'},
    {'name': 'exact.jpg', 'path': 'exact.jpg'},
    {'name': 'f4d325b6-e769-44e6-aa3b-e1af36e1d71a_300.jpg', 'path': 'f4d325b6-e769-44e6-aa3b-e1af36e1d71a_300.jpg'},
    {'name': 'f18f0560-da6f-4148-a6b1-b7bd17f46059_300.jpg', 'path': 'f18f0560-da6f-4148-a6b1-b7bd17f46059_300.jpg'},
    {'name': 'fbcc2693-86bb-4b23-a5cb-f59bd788a308_300.jpg', 'path': 'fbcc2693-86bb-4b23-a5cb-f59bd788a308_300.jpg'},
    {'name': 'FiestaSoftGripSilPinTMSiliconeRollingPin.jpg', 'path': 'FiestaSoftGripSilPinTMSiliconeRollingPin.jpg'},
    {'name': 'folding_bike_dahon.jpg', 'path': 'folding_bike_dahon.jpg'},
    {'name': 'folding_screens_retablo_d.jpg', 'path': 'folding_screens_retablo_d.jpg'},
    {'name': 'fork_up.jpg', 'path': 'fork_up.jpg'},
    {'name': 'francisfrancisx1-coffee-maker.jpg', 'path': 'francisfrancisx1-coffee-maker.jpg'},
    {'name': 'giant_tricycle_ma_06_m.jpg', 'path': 'giant_tricycle_ma_06_m.jpg'},
    {'name': 'gold heart rosary.jpg', 'path': 'gold heart rosary.jpg'},
    {'name': 'graco-2240-9757ngs.jpg', 'path': 'graco-2240-9757ngs.jpg'},
    {'name': 'hamadan-rug.jpg', 'path': 'hamadan-rug.jpg'},
    {'name': 'hammer.jpg', 'path': 'hammer.jpg'},
    {'name': 'hammernew03.jpg', 'path': 'hammernew03.jpg'},
    {'name': 'handle1.jpg', 'path': 'handle1.jpg'},
    {'name': 'happy-lei-light-green.jpg', 'path': 'happy-lei-light-green.jpg'},
    {'name': 'hawaiian_shirt_corvette_panel_rd_pf.jpg', 'path': 'hawaiian_shirt_corvette_panel_rd_pf.jpg'},
    {'name': 'hawaiian_shirt_motorcycle_bk_pf.jpg', 'path': 'hawaiian_shirt_motorcycle_bk_pf.jpg'},
    {'name': 'headphones_l.jpg', 'path': 'headphones_l.jpg'},
    {'name': 'henrybar_stool1.jpg', 'path': 'henrybar_stool1.jpg'},
    {'name': 'her9796.jpg', 'path': 'her9796.jpg'},
    {'name': 'High-Chair-HC-201-4-.jpg', 'path': 'High-Chair-HC-201-4-.jpg'},
    {'name': 'HM651001a_Leatherman_tool_charge_ti_mit_lederetui_Relags.jpg', 'path': 'HM651001a_Leatherman_tool_charge_ti_mit_lederetui_Relags.jpg'},
    {'name': 'il-423-3784.jpg', 'path': 'il-423-3784.jpg'},
    {'name': 'images-4898.jpg', 'path': 'images-4898.jpg'},
    {'name': 'img_9246-muffin.jpg', 'path': 'img_9246-muffin.jpg'},
    {'name': 'img_door_knockers_NEM2207.jpg', 'path': 'img_door_knockers_NEM2207.jpg'},
    {'name': 'inflatable-tent.jpg', 'path': 'inflatable-tent.jpg'},
    {'name': 'INGPCYHE0455.jpg', 'path': 'INGPCYHE0455.jpg'},
    {'name': 'istockphoto_2309369_meat_lovers_pizza_5.jpg', 'path': 'istockphoto_2309369_meat_lovers_pizza_5.jpg'},
    {'name': 'Jackson Wheelbarrow Produvt.jpg', 'path': 'Jackson Wheelbarrow Produvt.jpg'},
    {'name': 'JBL-Encounter-2.1-Speakers-2.jpg', 'path': 'JBL-Encounter-2.1-Speakers-2.jpg'},
    {'name': 'jd-bug-eco-scooter-blue.jpg', 'path': 'jd-bug-eco-scooter-blue.jpg'},
    {'name': 'joy011.jpg', 'path': 'joy011.jpg'},
    {'name': 'jp glove top.jpg', 'path': 'jp glove top.jpg'},
    {'name': 'Kamenstein-12-Tin-Magnetic-Spice-Rack-B0002TVV34-L.jpg', 'path': 'Kamenstein-12-Tin-Magnetic-Spice-Rack-B0002TVV34-L.jpg'},
    {'name': 'kayak_complet_10.jpg', 'path': 'kayak_complet_10.jpg'},
    {'name': 'ketchup-hot2-big.jpg', 'path': 'ketchup-hot2-big.jpg'},
    {'name': 'keyboardnew02.jpg', 'path': 'keyboardnew02.jpg'},
    {'name': 'l_640045_s05_000.jpg', 'path': 'l_640045_s05_000.jpg'},
    {'name': 'l_640643_s05_000.jpg', 'path': 'l_640643_s05_000.jpg'},
    {'name': 'l3659610.jpg', 'path': 'l3659610.jpg'},
    {'name': 'laptopnew04.jpg', 'path': 'laptopnew04.jpg'},
    {'name': 'laptopnew09.jpg', 'path': 'laptopnew09.jpg'},
    {'name': 'Large martingale-Reflective.jpg', 'path': 'Large martingale-Reflective.jpg'},
    {'name': 'Life-Fitness-C1-5-Upright-Exercise-Bike.jpg', 'path': 'Life-Fitness-C1-5-Upright-Exercise-Bike.jpg'},
    {'name': 'lightbulb28.jpg', 'path': 'lightbulb28.jpg'},
    {'name': 'LM8R.jpg', 'path': 'LM8R.jpg'},
    {'name': 'logitech-dinovo-edge.jpg', 'path': 'logitech-dinovo-edge.jpg'},
    {'name': 'loom-baby-wolf-500.jpg', 'path': 'loom-baby-wolf-500.jpg'},
    {'name': 'LPS1540.jpg', 'path': 'LPS1540.jpg'},
    {'name': 'M4791.jpg', 'path': 'M4791.jpg'},
    {'name': 'Make-Up-Set-Cake.jpg', 'path': 'Make-Up-Set-Cake.jpg'},
    {'name': 'master MR037.jpg', 'path': 'master MR037.jpg'},
    {'name': 'master-TD006.jpg', 'path': 'master-TD006.jpg'},
    {'name': 'matzah.jpg', 'path': 'matzah.jpg'},
    {'name': 'micro-scooter-t-bar-blue-6.jpg', 'path': 'micro-scooter-t-bar-blue-6.jpg'},
    {'name': 'MicrosoftTreoH4Web.jpg', 'path': 'MicrosoftTreoH4Web.jpg'},
    {'name': 'milkyway.jpg', 'path': 'milkyway.jpg'},
    {'name': 'mlc-3501-mule-saddle.jpg', 'path': 'mlc-3501-mule-saddle.jpg'},
    {'name': 'mom_quilt.jpg', 'path': 'mom_quilt.jpg'},
    {'name': 'MOME800-33.jpg', 'path': 'MOME800-33.jpg'},
    {'name': 'motorola c115-thumb.jpg', 'path': 'motorola c115-thumb.jpg'},
    {'name': 'MotoSmall.jpg', 'path': 'MotoSmall.jpg'},
    {'name': 'muffin02.jpg', 'path': 'muffin02.jpg'},
    {'name': 'Multimedia_Speakers.jpg', 'path': 'Multimedia_Speakers.jpg'},
    {'name': 'n_hsf.jpg', 'path': 'n_hsf.jpg'},
    {'name': 'n_sf_1666.jpg', 'path': 'n_sf_1666.jpg'},
    {'name': 'necklascenew04.jpg', 'path': 'necklascenew04.jpg'},
    {'name': 'necklascenew08.jpg', 'path': 'necklascenew08.jpg'},
    {'name': 'nlc009389-v6.jpg', 'path': 'nlc009389-v6.jpg'},
    {'name': 'nunchaku2.jpg', 'path': 'nunchaku2.jpg'},
    {'name': 'Nunchaku-White_sml.jpg', 'path': 'Nunchaku-White_sml.jpg'},
    {'name': 'ocadia11if.jpg', 'path': 'ocadia11if.jpg'},
    {'name': 'O-CRT-DU_lrg.jpg', 'path': 'O-CRT-DU_lrg.jpg'},
    {'name': 'p_NOR8121.jpg', 'path': 'p_NOR8121.jpg'},
    {'name': 'P184708_hero.jpg', 'path': 'P184708_hero.jpg'},
    {'name': 'P190250_hero.jpg', 'path': 'P190250_hero.jpg'},
    {'name': 'p1983817dt.jpg', 'path': 'p1983817dt.jpg'},
    {'name': 'p2363441dt.jpg', 'path': 'p2363441dt.jpg'},
    {'name': 'p2740000dt.jpg', 'path': 'p2740000dt.jpg'},
    {'name': 'p2796972dt.jpg', 'path': 'p2796972dt.jpg'},
    {'name': 'p3391515dt.jpg', 'path': 'p3391515dt.jpg'},
    {'name': 'p3677539dt.jpg', 'path': 'p3677539dt.jpg'},
    {'name': 'p3956769dt.jpg', 'path': 'p3956769dt.jpg'},
    {'name': 'Padlock_full.jpg', 'path': 'Padlock_full.jpg'},
    {'name': 'parfait.jpg', 'path': 'parfait.jpg'},
    {'name': 'peg_perego_uno_verde.jpg', 'path': 'peg_perego_uno_verde.jpg'},
    {'name': 'pellacoatrack_01.jpg', 'path': 'pellacoatrack_01.jpg'},
    {'name': 'pen02.jpg', 'path': 'pen02.jpg'},
    {'name': 'perfume5-b.jpg', 'path': 'perfume5-b.jpg'},
    {'name': 'PerfumeBottle.jpg', 'path': 'PerfumeBottle.jpg'},
    {'name': 'ph_hp_container1.jpg', 'path': 'ph_hp_container1.jpg'},
    {'name': 'photo_thing13.jpg', 'path': 'photo_thing13.jpg'},
    {'name': 'Pie-Straw.jpg', 'path': 'Pie-Straw.jpg'},
    {'name': 'PinkPassionWoovenHeadband.jpg', 'path': 'PinkPassionWoovenHeadband.jpg'},
    {'name': 'pipe4.jpg', 'path': 'pipe4.jpg'},
    {'name': 'pipe52.jpg', 'path': 'pipe52.jpg'},
    {'name': 'pizzapie.jpg', 'path': 'pizzapie.jpg'},
    {'name': 'Polyester_Toilet_Seat__White_.jpg', 'path': 'Polyester_Toilet_Seat__White_.jpg'},
    {'name': 'popmech2.jpg', 'path': 'popmech2.jpg'},
    {'name': 'potatochips.jpg', 'path': 'potatochips.jpg'},
    {'name': 'potatochips2.jpg', 'path': 'potatochips2.jpg'},
    {'name': 'Printed-Circuit-Board.jpg', 'path': 'Printed-Circuit-Board.jpg'},
    {'name': 'pTRU1-2788705dt.jpg', 'path': 'pTRU1-2788705dt.jpg'},
    {'name': 'Pumpkin Hookah Pipe Green on Red.jpg', 'path': 'Pumpkin Hookah Pipe Green on Red.jpg'},
    {'name': 'pumpkin.jpg', 'path': 'pumpkin.jpg'},
    {'name': 'PY2H1461.jpg', 'path': 'PY2H1461.jpg'},
    {'name': 'quilt05.jpg', 'path': 'quilt05.jpg'},
    {'name': 'r.jpg', 'path': 'r.jpg'},
    {'name': 'r-2.jpg', 'path': 'r-2.jpg'},
    {'name': 'RACING-BIKE-13540473898.jpg', 'path': 'RACING-BIKE-13540473898.jpg'},
    {'name': 'RASOIR1590-PHILIPS-HQ7782.jpg', 'path': 'RASOIR1590-PHILIPS-HQ7782.jpg'},
    {'name': 'recipes_parfait.jpg', 'path': 'recipes_parfait.jpg'},
    {'name': 'Red Canyon Tent.jpg', 'path': 'Red Canyon Tent.jpg'},
    {'name': 'red-swingline-stapler.jpg', 'path': 'red-swingline-stapler.jpg'},
    {'name': 'replacementbulb2.jpg', 'path': 'replacementbulb2.jpg'},
    {'name': 'review_mcmilitary_3.jpg', 'path': 'review_mcmilitary_3.jpg'},
    {'name': 'roger.jpg', 'path': 'roger.jpg'},
    {'name': 'ROMSL1374.jpg', 'path': 'ROMSL1374.jpg'},
    {'name': 'roquefort.jpg', 'path': 'roquefort.jpg'},
    {'name': 'rrr.jpg', 'path': 'rrr.jpg'},
    {'name': 's0165607_enl.jpg', 'path': 's0165607_enl.jpg'},
    {'name': 'salt_2.JPG', 'path': 'salt_2.JPG'},
    {'name': 'Salt_Pepper_Mills_Sets.jpg', 'path': 'Salt_Pepper_Mills_Sets.jpg'},
    {'name': 'samanthas-fixation-socks.jpg', 'path': 'samanthas-fixation-socks.jpg'},
    {'name': 'sandisk_sansa_m240_digital_audio_mp3_player-750479.jpg', 'path': 'sandisk_sansa_m240_digital_audio_mp3_player-750479.jpg'},
    {'name': 'Sandwichww.jpg', 'path': 'Sandwichww.jpg'},
    {'name': 'saunders12530_RingBinder.jpg', 'path': 'saunders12530_RingBinder.jpg'},
    {'name': 'scales345tt.jpg', 'path': 'scales345tt.jpg'},
    {'name': 'shears2.jpg', 'path': 'shears2.jpg'},
    {'name': 'Shot Glass_450.jpg', 'path': 'Shot Glass_450.jpg'},
    {'name': 'SimplyChickHeadband32.jpg', 'path': 'SimplyChickHeadband32.jpg'},
    {'name': 'single flap.jpg', 'path': 'single flap.jpg'},
    {'name': 'Skates.jpg', 'path': 'Skates.jpg'},
    {'name': 'SleepingCherubOnShell32004.jpg', 'path': 'SleepingCherubOnShell32004.jpg'},
    {'name': 'small lilliput robot.jpg', 'path': 'small lilliput robot.jpg'},
    {'name': 'socks-6780.jpg', 'path': 'socks-6780.jpg'},
    {'name': 'Sony_Bravia_cellphone_1.jpg', 'path': 'Sony_Bravia_cellphone_1.jpg'},
    {'name': 'sonytrv218_418a.jpg', 'path': 'sonytrv218_418a.jpg'},
    {'name': 'speedbike.jpg', 'path': 'speedbike.jpg'},
    {'name': 'spicerack1.jpg', 'path': 'spicerack1.jpg'},
    {'name': 'Spout_bottle_opener.jpg', 'path': 'Spout_bottle_opener.jpg'},
    {'name': 'squirt gun.JPG', 'path': 'squirt gun.JPG'},
    {'name': 'ss30.jpg', 'path': 'ss30.jpg'},
    {'name': 'Starfish01N.jpg', 'path': 'Starfish01N.jpg'},
    {'name': 'StarfishMod2.jpg', 'path': 'StarfishMod2.jpg'},
    {'name': 'stingray-leather-hobo-handbag-1.jpg', 'path': 'stingray-leather-hobo-handbag-1.jpg'},
    {'name': 'Straight_Shaft_Umbrellas.jpg', 'path': 'Straight_Shaft_Umbrellas.jpg'},
    {'name': 'sushi.jpg', 'path': 'sushi.jpg'},
    {'name': 'sushi_narrowweb__300x357,0.jpg', 'path': 'sushi_narrowweb__300x357,0.jpg'},
    {'name': 'swords_gladiator_sword_of_tigris.jpg', 'path': 'swords_gladiator_sword_of_tigris.jpg'},
    {'name': 'swords_western_tizona_of_charles_v.jpg', 'path': 'swords_western_tizona_of_charles_v.jpg'},
    {'name': 'T3AM07.jpg', 'path': 'T3AM07.jpg'},
    {'name': 'tapir-stamp_31.jpg', 'path': 'tapir-stamp_31.jpg'},
    {'name': 'tc1050b_500pix.jpg', 'path': 'tc1050b_500pix.jpg'},
    {'name': 'tecnica_denise-boot_oker_ocra.jpg', 'path': 'tecnica_denise-boot_oker_ocra.jpg'},
    {'name': 'teddybear_1.jpg', 'path': 'teddybear_1.jpg'},
    {'name': 'tienew07.jpg', 'path': 'tienew07.jpg'},
    {'name': 'tienew14.jpg', 'path': 'tienew14.jpg'},
    {'name': 'Timbre07FestivalTeleAG.jpg', 'path': 'Timbre07FestivalTeleAG.jpg'},
    {'name': 'tire.jpg', 'path': 'tire.jpg'},
    {'name': 'TOY-010.jpg', 'path': 'TOY-010.jpg'},
    {'name': 'train9.jpg', 'path': 'train9.jpg'},
    {'name': 'TurtleLicensePlate.jpg', 'path': 'TurtleLicensePlate.jpg'},
    {'name': 'Ultra-Short-pacific-blue400.jpg', 'path': 'Ultra-Short-pacific-blue400.jpg'},
    {'name': 'umbrella-golf-a.jpg', 'path': 'umbrella-golf-a.jpg'},
    {'name': 'unbranded-cumfilux-astral-3ft-mattress.jpg', 'path': 'unbranded-cumfilux-astral-3ft-mattress.jpg'},
    {'name': 'Untitled-6.jpg', 'path': 'Untitled-6.jpg'},
    {'name': 'Wilson53Big.jpg', 'path': 'Wilson53Big.jpg'},
    {'name': 'wolf-pup -500.jpg', 'path': 'wolf-pup -500.jpg'},
    {'name': 'xbox-controller-s.jpg', 'path': 'xbox-controller-s.jpg'},
    {'name': 'XVOFN.jpg', 'path': 'XVOFN.jpg'},
    {'name': 'Yachting Magazine Cover - July 2004.jpg', 'path': 'Yachting Magazine Cover - July 2004.jpg'},
    {'name': 'Yellow-Kettle.jpg', 'path': 'Yellow-Kettle.jpg'},
    {'name': 'YKDPM.jpg', 'path': 'YKDPM.jpg'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.2';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.com/submissions/complete?cc=C1K3LNZU', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["Prolific_ID"]}_${expName}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var instr_text;
var start_remembering;
var remeberingClock;
var stim_to_remember;
var ISI;
var mouse_2;
var BeforeExpClock;
var instr_text_2;
var start_trials;
var expClock;
var pos;
var mouse;
var stim_1;
var stim_2;
var feedbackClock;
var feedback_text;
var ThankYouClock;
var end_text;
var finish_exp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'Thank you for participating!\nIt will take you no more than 15 minutes to complete the task.\nPlease turn off notifications on all devices that may disturb you.\n\nThere are 2 parts of the experiment:\nIn the first part, you need to remember all the presented images.\nIn the second part, you must select from images on the screen the one that was shown earlier (in the first part).\n\nIf you are ready to run the first part of the experiment, press Enter.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  start_remembering = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "remebering"
  remeberingClock = new util.Clock();
  stim_to_remember = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim_to_remember', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  ISI = new visual.TextStim({
    win: psychoJS.window,
    name: 'ISI',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "BeforeExp"
  BeforeExpClock = new util.Clock();
  instr_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_2',
    text: 'In the second part of the experiment, you must select from images on the screen the one that was shown earlier in the first part. \n\nIf you are ready to run the second part of the experiment, press Enter.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  start_trials = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp"
  expClock = new util.Clock();
  // Run 'Begin Experiment' code from code_2
  //import * as random from 'random';
  pos = [[(- 0.25), 0], [0.25, 0]];
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  stim_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim_1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  stim_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ThankYou"
  ThankYouClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Thank you for participating in the experiment!\n\nThis is your completion code: C1K3LNZU.\n\nPlease, press Enter to finish the experiment.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  finish_exp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _start_remembering_allKeys;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    start_remembering.keys = undefined;
    start_remembering.rt = undefined;
    _start_remembering_allKeys = [];
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instr_text);
    instrComponents.push(start_remembering);
    
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // *start_remembering* updates
    if (t >= 2 && start_remembering.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_remembering.tStart = t;  // (not accounting for frame time here)
      start_remembering.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_remembering.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_remembering.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_remembering.clearEvents(); });
    }
    
    if (start_remembering.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_remembering.getKeys({keyList: ['return'], waitRelease: false});
      _start_remembering_allKeys = _start_remembering_allKeys.concat(theseKeys);
      if (_start_remembering_allKeys.length > 0) {
        start_remembering.keys = _start_remembering_allKeys[_start_remembering_allKeys.length - 1].name;  // just the last key pressed
        start_remembering.rt = _start_remembering_allKeys[_start_remembering_allKeys.length - 1].rt;
        start_remembering.duration = _start_remembering_allKeys[_start_remembering_allKeys.length - 1].duration;
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
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_remembering.corr, level);
    }
    psychoJS.experiment.addData('start_remembering.keys', start_remembering.keys);
    if (typeof start_remembering.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_remembering.rt', start_remembering.rt);
        psychoJS.experiment.addData('start_remembering.duration', start_remembering.duration);
        routineTimer.reset();
        }
    
    start_remembering.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pic_remebering;
function pic_remeberingLoopBegin(pic_remeberingLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pic_remebering = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '2AFC_1.xlsx',
      seed: undefined, name: 'pic_remebering'
    });
    psychoJS.experiment.addLoop(pic_remebering); // add the loop to the experiment
    currentLoop = pic_remebering;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    pic_remebering.forEach(function() {
      snapshot = pic_remebering.getSnapshot();
    
      pic_remeberingLoopScheduler.add(importConditions(snapshot));
      pic_remeberingLoopScheduler.add(remeberingRoutineBegin(snapshot));
      pic_remeberingLoopScheduler.add(remeberingRoutineEachFrame());
      pic_remeberingLoopScheduler.add(remeberingRoutineEnd(snapshot));
      pic_remeberingLoopScheduler.add(pic_remeberingLoopEndIteration(pic_remeberingLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function pic_remeberingLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(pic_remebering);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function pic_remeberingLoopEndIteration(scheduler, snapshot) {
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
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '2AFC_1.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(expRoutineBegin(snapshot));
      trialsLoopScheduler.add(expRoutineEachFrame());
      trialsLoopScheduler.add(expRoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
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
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var gotValidClick;
var remeberingComponents;
function remeberingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'remebering' ---
    t = 0;
    remeberingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.750000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('remebering.started', globalClock.getTime());
    // Run 'Begin Routine' code from code
    //psychoJS.window.mouseVisible = false;
    document.body.style.cursor='none';
    
    stim_to_remember.setImage(stimulus1);
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    remeberingComponents = [];
    remeberingComponents.push(stim_to_remember);
    remeberingComponents.push(ISI);
    remeberingComponents.push(mouse_2);
    
    remeberingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function remeberingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'remebering' ---
    // get current time
    t = remeberingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim_to_remember* updates
    if (t >= 0.0 && stim_to_remember.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_to_remember.tStart = t;  // (not accounting for frame time here)
      stim_to_remember.frameNStart = frameN;  // exact frame index
      
      stim_to_remember.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim_to_remember.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim_to_remember.setAutoDraw(false);
    }
    
    // *ISI* updates
    if (t >= 0.25 && ISI.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ISI.tStart = t;  // (not accounting for frame time here)
      ISI.frameNStart = frameN;  // exact frame index
      
      ISI.setAutoDraw(true);
    }
    
    frameRemains = 0.25 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ISI.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ISI.setAutoDraw(false);
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
    remeberingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
var _mouseButtons;
function remeberingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'remebering' ---
    remeberingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('remebering.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    //psychoJS.window.mouseVisible = true;
    document.body.style.cursor='auto';
    
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_2.getPos();
    _mouseButtons = mouse_2.getPressed();
    psychoJS.experiment.addData('mouse_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_2.rightButton', _mouseButtons[2]);
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _start_trials_allKeys;
var BeforeExpComponents;
function BeforeExpRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BeforeExp' ---
    t = 0;
    BeforeExpClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('BeforeExp.started', globalClock.getTime());
    start_trials.keys = undefined;
    start_trials.rt = undefined;
    _start_trials_allKeys = [];
    // keep track of which components have finished
    BeforeExpComponents = [];
    BeforeExpComponents.push(instr_text_2);
    BeforeExpComponents.push(start_trials);
    
    BeforeExpComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BeforeExpRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BeforeExp' ---
    // get current time
    t = BeforeExpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text_2* updates
    if (t >= 0.0 && instr_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text_2.tStart = t;  // (not accounting for frame time here)
      instr_text_2.frameNStart = frameN;  // exact frame index
      
      instr_text_2.setAutoDraw(true);
    }
    
    
    // *start_trials* updates
    if (t >= 1 && start_trials.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_trials.tStart = t;  // (not accounting for frame time here)
      start_trials.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_trials.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_trials.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_trials.clearEvents(); });
    }
    
    if (start_trials.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_trials.getKeys({keyList: ['return'], waitRelease: false});
      _start_trials_allKeys = _start_trials_allKeys.concat(theseKeys);
      if (_start_trials_allKeys.length > 0) {
        start_trials.keys = _start_trials_allKeys[_start_trials_allKeys.length - 1].name;  // just the last key pressed
        start_trials.rt = _start_trials_allKeys[_start_trials_allKeys.length - 1].rt;
        start_trials.duration = _start_trials_allKeys[_start_trials_allKeys.length - 1].duration;
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
    BeforeExpComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BeforeExpRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BeforeExp' ---
    BeforeExpComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BeforeExp.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_trials.corr, level);
    }
    psychoJS.experiment.addData('start_trials.keys', start_trials.keys);
    if (typeof start_trials.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_trials.rt', start_trials.rt);
        psychoJS.experiment.addData('start_trials.duration', start_trials.duration);
        routineTimer.reset();
        }
    
    start_trials.stop();
    // the Routine "BeforeExp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pos1;
var pos2;
var expComponents;
function expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp' ---
    t = 0;
    expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_2
    pos=pos.sort(() => Math.random()-0.5);
    pos1 = pos[0];
    pos2 = pos[1];
    
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    stim_1.setPos(pos1);
    stim_1.setImage(stimulus_1);
    stim_2.setPos(pos2);
    stim_2.setImage(foil);
    // keep track of which components have finished
    expComponents = [];
    expComponents.push(mouse);
    expComponents.push(stim_1);
    expComponents.push(stim_2);
    
    expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
function expRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp' ---
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
          if (gotValidClick === true) { // end routine on response
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
    expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp' ---
    expComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp.stopped', globalClock.getTime());
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
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var message;
var feed_back_col;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_3
    if (mouse.isPressedIn(stim_1)) {
        message = "Correct";
        feed_back_col = "green";
    } else {
        message = "Incorrect";
        feed_back_col = "red";
    }
    
    feedback_text.setColor(new util.Color(feed_back_col));
    feedback_text.setText(message);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_text);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
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
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _finish_exp_allKeys;
var ThankYouComponents;
function ThankYouRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ThankYou' ---
    t = 0;
    ThankYouClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ThankYou.started', globalClock.getTime());
    finish_exp.keys = undefined;
    finish_exp.rt = undefined;
    _finish_exp_allKeys = [];
    // keep track of which components have finished
    ThankYouComponents = [];
    ThankYouComponents.push(end_text);
    ThankYouComponents.push(finish_exp);
    
    ThankYouComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ThankYouRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ThankYou' ---
    // get current time
    t = ThankYouClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }
    
    
    // *finish_exp* updates
    if (t >= 2 && finish_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish_exp.tStart = t;  // (not accounting for frame time here)
      finish_exp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { finish_exp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { finish_exp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { finish_exp.clearEvents(); });
    }
    
    if (finish_exp.status === PsychoJS.Status.STARTED) {
      let theseKeys = finish_exp.getKeys({keyList: ['return'], waitRelease: false});
      _finish_exp_allKeys = _finish_exp_allKeys.concat(theseKeys);
      if (_finish_exp_allKeys.length > 0) {
        finish_exp.keys = _finish_exp_allKeys[_finish_exp_allKeys.length - 1].name;  // just the last key pressed
        finish_exp.rt = _finish_exp_allKeys[_finish_exp_allKeys.length - 1].rt;
        finish_exp.duration = _finish_exp_allKeys[_finish_exp_allKeys.length - 1].duration;
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
    ThankYouComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ThankYouRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ThankYou' ---
    ThankYouComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ThankYou.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(finish_exp.corr, level);
    }
    psychoJS.experiment.addData('finish_exp.keys', finish_exp.keys);
    if (typeof finish_exp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('finish_exp.rt', finish_exp.rt);
        psychoJS.experiment.addData('finish_exp.duration', finish_exp.duration);
        routineTimer.reset();
        }
    
    finish_exp.stop();
    // the Routine "ThankYou" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
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
