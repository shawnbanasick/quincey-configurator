const createMapXmlSlice = (set, get) => ({
  /*
   ******** MULTIPLE  ****************** */
  btnHelp: "Help",
  footerTextSize: `Text Size`,
  footerCardHeight: `Card Height`,
  btnNext: "Continue",
  stepCompleted: `You have completed this step. Please click on the <b> blue "Continue" button </b> at the bottom right-side of your screen to go to the next step.`,
  loginFirst: "Please complete the log-in process first.",
  screenOrientationText: `Please Use Portrait Orientation!`,

  /*
   ******** CONSENT PAGE  ****************** */
  consentTitleBarText: `Research Consent`,
  consentText: `You are invited to participate in a research study conducted by [Principal Investigator’s Name] at [Institution or Organization]. Before you decide to participate, it is important that you understand why the research is being conducted and what it will involve. Please take the time to read the following information carefully. Feel free to contact the research team with any questions you may have.<br /><br /><b>Purpose of the Study</b><br />The purpose of this study is to [briefly describe the purpose, e.g., understand the effects of a new teaching method on student performance]. This research will help us gain insights into [mention any broader implications or goals of the study]. <br /><br /><b>Study Procedures</b><br />If you agree to participate, you will be asked to [describe the procedures involved, including what participants will do, how long it will take, and how frequently it will occur]. For example, you will be asked to complete evaluate a series of statements, sort them, and then reflect on the sorting. Additionally, there is a short questionnaires at the end. The study will take approximately [duration, e.g., 45 minutes]. <br /><br /><b>Benefits</b><br />While there may not be direct benefits to you for participating, the information gathered from this study may help [describe potential benefits, e.g., improve educational methods, contribute to scientific knowledge, etc.]. You may also gain personal insights into [describe any personal benefits, if applicable].<br /><br /><b>Confidentiality</b><br />All information collected in this study will be kept strictly confidential. Data will be stored securely and only the research team will have access to it. Your identity will not be disclosed in any reports or publications resulting from this study. [Describe how data will be anonymized, encrypted, or stored securely].<br /><br /><b>Voluntary Participation</b><br />Your participation in this study is entirely voluntary. You are free to decline to participate, or to withdraw at any time, without penalty or loss of benefits to which you are otherwise entitled. If you decide to withdraw, close the webpage and any data collected up to that point will be deleted.<br /><br /><b>Consent</b><br />By clicking on the "Agree" button on the bottom of this page, you are indicating that you have read and understood the information provided, and that you agree to participate in this study. If you have any questions about this study, please contact [Principal Investigator’s Name and Contact Information].`,
  consentHelpModalHead: `Contact Information`,
  consentHelpModalText: `Thank you for participating in this University Research Project. You can contact the research team by phone (1-555-867-5309) or by email at researchTeam@myMail.com`,
  btnNextConsent: `Agree and Continue`,
  btnHelpConsent: `Contact Information`,

  /*
   ******** LANDING  ****************** */
  landingHead: `University Research Project`,
  welcomeMessage: `<h2>EQ Web Sort Demo Project - iPad Use in the Classroom.</h2><br/><br/><p>Thank you for helping with this research project</p><br/><br/><br/>
    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/lMy4ARVEcCI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,
  landingHelpModalHead: `Welcome!`,
  landingHelpModalText: `Thank you for participating in this University Research Project. Please click the "<b>Continue</b>" button at the bottom right side of the screen to go to the next step.`,
  btnNextLanding: `Continue`,
  btnHelpLanding: `Help`,

  /*
   ******** ACCESS  ****************** */
  loginWelcomeText: `<center></center><h3>Welcome!</h3></center><br/> Thank you for participating in this Q methodology research project. <br/>Please <b>sign in</b> using the form below to begin the process. `,
  loginHeaderText: `Sign In`,
  loginPartIdText: `Please enter your name or participant ID`,
  accessCodeText: `Access Code`,
  partIdWarning: `Invalid name or ID`,
  accessCodeWarning: `Access code invalid`,
  loginSubmitButtonText: `Submit`,

  accessInputText: "Please enter the access code for this survey.",
  /*
   ******** LOCAL DATA COLLECTION  ****************** */
  localHeader: "Offline Q-sort Control Panel",
  partIdText: "Participant Name",
  usercodeText: "Usercode",
  localStartButtonText: "Start Q-sort",
  localDeleteButtonText: "Delete",
  localDownloadButtonText: "Save Q-sort Data to Disk",
  storedQsortsHeaderText: "Stored Q-sorts",
  localDeleteModalText:
    "This will delete the particpant Q-sort data that is currently stored in the browser. You would usually only do this when you are starting a new project.<br/><br/><b>CAUTION - Deleted data cannot be recovered.</b> <br/><br/> <center></center>",
  localDeleteModalHead: "Delete Data Stored in Browser?",
  localParticipantsText: "Participants",
  localSaveDataButton: "Save Participant Data to Browser Memory",
  localSubmitSuccessModalHeader: "Success",
  localSubmitSuccessModalText:
    "Participant Q sort data have been succesfully saved to browser memory",
  returnToLocalPanelButtonText: "Return to Control Panel",
  localSaveBeforeDeleteModalHeader: "Delete Disabled",
  localSaveBeforeDeleteModalText: "Save Q sort Data to Disk before deleting.",

  /*
   ******** PRESORT  ****************** */
  titleBarText: `Preliminary Sorting`,
  presortAgreement: `Agree (3)`,
  presortStatements: `Statements`,
  presortNeutral: `No Strong Feelings (2)`,
  presortDisagreement: `Disagree (1)`,
  presortImageSortInstructions: `To enlarge an image, hover your mouse pointer over it and double-click. <br/><br/> To compare images, <u>press and hold</u> the <b><i>Shift</i></b> key on your keyboard and then double-click on TWO images with your mouse.`,
  presortModalHead: `Step 1 of 4`,
  presortModalText: `Read the following statements carefully and split them up into three piles: a pile for statements you tend to disagree with, a pile for cards you tend to agree with, and a pile for the rest. Changes can be made later.<br/><br/>If you want to read this instruction a second time, click the help-button in the bottom left corner.<br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/vtnLuKzpcKQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,
  presortPreventNavModalHead: `Navigation Disabled`,
  presortPreventNavModalText: `Please finish the preliminary sorting before going to the next step.`,
  presortFinishedModalHead: `Preliminary Sorting Complete`,
  presortFinishedModalText: `You have completed this step. Please click the "Continue" button in the bottom right side of the page to go to the next step.`,
  presortOnPageInstructions: `<div style="font-size: 24px">Click and drag on the cards  or press the "1", "2", or "3" keys to sort the statements.</div>`,

  /*
   ******** MOBILE PRESORT  ****************** */
  mobilePresortConditionsOfInstruction: `Evaluate the Statements According to Your Experience of using the iPads in the Class`,
  mobilePresortCompletedLabel: `Completed Evaluations`,
  mobilePresortAssignLeft: `Different from My Perspective`,
  mobilePresortAssignRight: `Similar to My Perspective`,
  mobilePresortRedoModalHead: `Re-Evaluate Statement`,
  mobilePresortRedoModalText: `Click on the appropriate icon`,
  mobilePresortRedoModalConfirmButton: `Confirm`,
  mobilePresortEvaluationsComplete: `<div><b>All Statements Evaluated.</b> <br /><br />Please review the statements to confirm your evaluations.  <br /><br /><div>`,
  mobilePresortHelpModalHead: `Stage 1 of 5<br />Statement Evaluation`,
  mobilePresortHelpModalText: `Tap on the appropriate button to assign a value to each statement. <br /><br /> If you feel that the statement is <b>similar to your perspective</b>, tap the green "+" button.<br /><br /> If you feel that the statement is <b>different from your perspective</b>, tap the red "-" button. <br /><br />If you are unsure, tap the "?" button. <br /><br /> There are <b>33 statements</b> in this survey. <br /><br /> If you want to <b>change</b> your evaluation, tap the <b>redo icon</b> next to the statement.`,
  mobilePresortFinishedModalHead: `Stage 1 of 5<br />Statement Evaluation`,
  mobilePresortFinishedModalText: `The evaluation process is complete. <br/><br/> Please <b>review the statements</b> to confirm your evaluations.  <br /><br />If you want to make a change, tap the "redo" icon to the left of the statement.<br /><br />When you are satisfied with all of your evaluations, tap the <b>navigation button</b> on the bottom right.`,
  mobilePresortProcessCompleteMessage: `The evaluation process is complete. <br/><br/> Please click on the navigation button on the bottom right side to go to the next stage.`,
  mobilePresortPreventNavModalHead: `Navigation Disabled`,
  mobilePresortPreventNavModalText: `Please finish the evaluations before going to the next stage.`,

  /*
   ******** THINNING  ****************** */
  thinningPreventNavModalHead: `Navigation Disabled`,
  thinningPreventNavModalText: `Please finish the refining process before going to the next step.`,
  thinningConfirmModalHead: `Incomplete Selection`,
  thinningConfirmModalText: `Please select the required number of statements.`,
  agreeMostText: `Next, repeat the process with the remaining statements, but this time please select the cards that you agree with the most.`,
  agreeLeastText: `Next, repeat the process with the remaining statements, but this time please select the cards that you agree with the least.`,
  initialInstructionPart1: `Below are the statements you rated positively in the previous step. Now, pick the number of statements that you <b>MOST AGREE</b>.<br /><br />`,
  initialInstructionPart2: `Next, continue to select the statements that are CLOSEST to your perspective`,
  initialInstructionPart3: `Another set of statements will appear on the screen after you click the orange "Submit" button.`,
  finalInstructions: `Refinement process complete. Click on the navigation button on the bottom right side to go to the next stage..`,

  /*
   ******** MOBILE THINNING  ****************** */
  moveTopMobileHead: `Confirm Move`,
  moveTopMobileText: `Move this statement to the top of the list?`,
  moveBottomMobileText: `Move this statement to the bottom of the list?`,
  moveAllTopMobileText: `Move all selected statements to the top of the list?`,
  moveTopMobileButtonOK: `Yes`,
  moveTopMobileButtonCancel: `Cancel`,
  mobileThinConditionsOfInstruction: `Refine Your Evaluations`,
  mobileThinSubmitButtonText: `Submit`,
  mobileThinHelpModalHead: `Refine Your Evaluations`,
  mobileThinHelpModalText: `During this stage you will be asked to <b></b>review the statements</b> you evaluated and choose those that are most similar or most different from your perspective.<br/><br/>You may need to <b>scroll down</b> to see all of the statements.<br/><br/>To <b>select a statement</b>, tap on the statement container. The color of the statement will change to yellow.<br/><br/>When you have selected the <b>correct number</b> of statements, the "Submit" button will change to <b>blue</b>. <br/><br/>To make it easier to compare the statements, you can <b>reorder</b> them by tapping on the up and down arrows located on the right or left sides of the statement.<br/><br/>You can also <b>move a group</b> of selected statements to the top of the list by <b>long pressing</b> (about 1 second) on a statement.`,
  mobileThinPreventNavModalHead: `Navigation Disabled`,
  mobileThinPreventNavModalText: `Please complete the refining process before navigating to the next page.`,
  mobileThinProcessCompleteMessage: `The refinement process is complete. <br/><br/> Please click on the navigation button on the bottom right side to go to the next stage.`,
  mobileGuidanceModalRight1Header: `Stage 2 of 5<br/> Refinement Process`,
  mobileGuidanceModalRight1Text: `There are several steps in this Stage. <br/><br/>Step 1. Please look at all of the statements that you evaluated <b>positively</b> and select those that are <b>closest to your perspective</b>.<br/><br/>You may need to <b>scroll</b> down to see all of the statements.`,
  mobileGuidanceModalRight2Header: `Stage 2 of 5<br/> Refinement Process`,
  mobileGuidanceModalRight2Text: `Next, once again look at the remaining statements that you evaluated <b>positively</b> and select the <b>next set</b> of statements that are <b>closest to your perspective</b>.`,
  mobileGuidanceModalLeft1Header: `Stage 2 of 5<br/> Refinement Process`,
  mobileGuidanceModalLeft1Text: `Step 2. Next, please look at all of the statements that you evaluated negatively and <b>select</b> those that <b>differ the most</b> from your perspective.<br/><br/>You may need to <b>scroll down</b> to see all of the statements.`,
  mobileGuidanceModalLeft2Header: `Stage 2 of 5<br/> Refinement Process`,
  mobileGuidanceModalLeft2Text: `Next, once again look at the remaining statements that you evalued <b>negatively</b> and <b>select</b> the <b>next set</b> of statements that are <b>most different from to your perspective</b>.`,
  mobileThinScrollBottomModalHead: `Confirmation Disabled`,
  mobileThinScrollBottomModalText: `Please scroll to the bottom and review all the statements before confirming your selections.`,

  /*
   ******** SORT  ****************** */
  sortHelpModalHead: `Step 2 of 4`,
  sortHelpModalText: `In this step, please click and drag the statement cards to the appropriate column based on your perspective and the researcher's instructions at the top of the page. <br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/iRxC9Vv3dLo?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,
  sortAgreement: `Agree`,
  sortDisagreement: `Disagree`,
  condOfInst: `Sort the cards according to your experience with the iPads this semester`,
  sortingCompleteModalHead: `Sorting Complete`,
  sortingCompleteModalText: `You have completed the initial sorting. Please take a moment to confirm your placement of the cards.<br/><br/>When you are satisfied with their placement, please click on the <b>blue "Continue" button</b> at the bottom right-side of your screen to go to the next step.`,
  sortPreventNavModalHead: `Navigation Disabled`,
  sortPreventNavModalText: `Please finish the grid sorting before going to the next step.`,
  sortOverloadedColumnModalHead: `Navigation Disabled`,
  sortOverloadedColumnModalText: `One of the columns has too many cards (it will be outlined in orange and have a dashed border). Please adjust the placement of the cards so that all columns have the correct number.`,
  /*
   ******** POSTSORT  ****************** */
  postsortHeader: `Post-Sort Comments`,
  postsortInstructions: `<h3>Please describe your thoughts about these statements in more detail.</h3>`,
  placeholder: `Click here to add comment`,
  postsortAgreement: `Placed on Agree`,
  postsortDisagreement: `Placed on Disagree`,
  postsortModalHead: `Step 3 of 4`,
  postsortModalText: `You can use the buttons at the bottom of the page to change the font size or card height.<br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/EFNlSiaEVVg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></h3></center>`,
  postsortPreventNavModalHead: `Navigation Disabled`,
  postsortPreventNavModalText: `Please add comments to all of the cards before going to the next step.`,
  postsortBackButton: `Go Back`,
  /*
   ******** SURVEY  ****************** */
  surveyHeader: `Post-Sort Questionnaire`,
  surveyModalHead: `Step 4 of 4`,
  surveyModalText: `Finally, please answer the following questions regarding your background. The questions marked with an "*" in their title are required.<br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/68MHzgLn1zg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,
  surveyPreventNavModalHead: `Navigation Disabled`,
  surveyPreventNavModalText: `Please answer the required questions (outlined in yellow) before going to the next step.`,

  /*
   ******** SUBMIT  ****************** */
  btnTransfer: `Submit Data`,
  yransferHead: `Final Step`,
  transferTextAbove: `<h1>Ready to Submit</h1><br/><br/> <h2>Please click the "Submit Data" button to transmit your results.</h2>`,
  transferTextBelow: `If the submission confirmation message does not appear, <br/>please wait a few minutes and click the submit button again.`,
  TransferOkModalHeader: `Success - The data have been sent to the server.`,
  TransferOkModalText: `Thank you for using EQ Web Sort!<br/><br/>You can now close your browser tab.`,
  TransferFailModalHeader: `Connection to server failed`,
  TransferFailModalText: `Please try again in a few moments.`,
  FallbackMessage: `Data transmission has failed. Please download the results and email them as an attachment to ken.q.tools@gmail.com.  Thank you!`,
  BtnDownload: `Download`,
  GoodbyeMessage: `<div>Thank You!</div> <br /><div>You can now close the browser tab</div>`,

  /*
   ******** EMAIL  ****************** */
  EmailSubmitBtn: "Open Email Client and Send Results",
  EmailCopyResultsBtn: "Copy Results to Clipboard",
  EmaiCopyAddressBtn: "Copy Email Address to Clipboard",
  CopySuccessMessage: "Copied!",
  CopyFailMessage: "Error: Please try again.",
  DefaultEmailFailModalText:
    "Your default email client should have automatically opened with the results in the email body. If it didn't, please use the buttons below to copy and paste your information into an email.",
  EmailBodyMessage:
    "You don't have to add anything to this email. Please just click the SEND button.",

  /*
   ******** LINKING  ****************** */
  LinkingFallbackMessage: "Please click the button to begin the next Q sort",
  LinkingBtnText: "Begin Next Q sort",

  /*
   ******** GENERICS  ****************** */
  setText: (stateDesig, text) => set((state) => ({ [stateDesig]: text })),

  /*
   ******** SET VALUES  ****************** */
  setMobilePresortConditionsOfInstruction: (value) => {
    set(() => ({ mobilePresortConditionsOfInstruction: value }));
  },
  setMobilePresortCompletedLabel: (value) => {
    set(() => ({ mobilePresortCompletedLabel: value }));
  },
  setMobilePresortAssignLeft: (value) => {
    set(() => ({ mobilePresortAssignLeft: value }));
  },
  setMobilePresortAssignRight: (value) => {
    set(() => ({ mobilePresortAssignRight: value }));
  },
  setMobilePresortRedoModalHead: (value) => {
    set(() => ({ mobilePresortRedoModalHead: value }));
  },
  setMobilePresortRedoModalText: (value) => {
    set(() => ({ mobilePresortRedoModalText: value }));
  },
  setMobilePresortRedoModalConfirmButton: (value) => {
    set(() => ({ mobilePresortRedoModalConfirmButton: value }));
  },
  setMobilePresortEvaluationsComplete: (value) => {
    set(() => ({ mobilePresortEvaluationsComplete: value }));
  },
  setMobilePresortHelpModalHead: (value) => {
    set(() => ({ mobilePresortHelpModalHead: value }));
  },
  setMobilePresortHelpModalText: (value) => {
    set(() => ({ mobilePresortHelpModalText: value }));
  },
  setMobilePresortFinishedModalHead: (value) => {
    set(() => ({ mobilePresortFinishedModalHead: value }));
  },
  setMobilePresortFinishedModalText: (value) => {
    set(() => ({ mobilePresortFinishedModalText: value }));
  },
  setMobilePresortProcessCompleteMessage: (value) => {
    set(() => ({ mobilePresortProcessCompleteMessage: value }));
  },
  setMobilePresortPreventNavModalHead: (value) => {
    set(() => ({ mobilePresortPreventNavModalHead: value }));
  },
  setMobilePresortPreventNavModalText: (value) => {
    set(() => ({ mobilePresortPreventNavModalText: value }));
  },
  setMobileGuidanceModalRight1Header: (value) => {
    set(() => ({ mobileGuidanceModalRight1Header: value }));
  },
  setMobileGuidanceModalRight1Text: (value) => {
    set(() => ({ mobileGuidanceModalRight1Text: value }));
  },
  setMobileGuidanceModalRight2Header: (value) => {
    set(() => ({ mobileGuidanceModalRight2Header: value }));
  },
  setMobileGuidanceModalRight2Text: (value) => {
    set(() => ({ mobileGuidanceModalRight2Text: value }));
  },
  setMobileGuidanceModalLeft1Header: (value) => {
    set(() => ({ mobileGuidanceModalLeft1Header: value }));
  },
  setMobileGuidanceModalLeft1Text: (value) => {
    set(() => ({ mobileGuidanceModalLeft1Text: value }));
  },
  setMobileGuidanceModalLeft2Header: (value) => {
    set(() => ({ mobileGuidanceModalLeft2Header: value }));
  },
  setMobileGuidanceModalLeft2Text: (value) => {
    set(() => ({ mobileGuidanceModalLeft2Text: value }));
  },
  setMobileThinScrollBottomModalHead: (value) => {
    set(() => ({ mobileThinScrollBottomModalHead: value }));
  },
  setMobileThinScrollBottomModalText: (value) => {
    set(() => ({ mobileThinScrollBottomModalText: value }));
  },
  setMobileThinConditionsOfInstruction: (value) => {
    set(() => ({ mobileThinConditionsOfInstruction: value }));
  },
  setMobileThinSubmitButtonText: (value) => {
    set(() => ({ mobileThinSubmitButtonText: value }));
  },
  setMobileThinHelpModalHead: (value) => {
    set(() => ({ mobileThinHelpModalHead: value }));
  },
  setMobileThinHelpModalText: (value) => {
    set(() => ({ mobileThinHelpModalText: value }));
  },
  setMobileThinPreventNavModalHead: (value) => {
    set(() => ({ mobileThinPreventNavModalHead: value }));
  },
  setMobileThinPreventNavModalText: (value) => {
    set(() => ({ mobileThinPreventNavModalText: value }));
  },
  setMobileThinProcessCompleteMessage: (value) => {
    set(() => ({ mobileThinProcessCompleteMessage: value }));
  },

  setBtnHelp: (value) => {
    set(() => ({ btnHelp: value }));
  },
  setFooterTextSize: (value) => {
    set(() => ({ footerTextSize: value }));
  },
  setFooterCardHeight: (value) => {
    set(() => ({ footerCardHeight: value }));
  },
  setBtnNext: (value) => {
    set(() => ({ btnNext: value }));
  },
  setStepCompleted: (value) => {
    set(() => ({ stepCompleted: value }));
  },
  setLoginFirst: (value) => {
    set(() => ({ loginFirst: value }));
  },
  setConsentTitleBarText: (value) => {
    set(() => ({ consentTitleBarText: value }));
  },
  setConsentText: (value) => {
    set(() => ({ consentText: value }));
  },
  setConsentHelpModalHead: (value) => {
    set(() => ({ consentHelpModalHead: value }));
  },
  setConsentHelpModalText: (value) => {
    set(() => ({ consentHelpModalText: value }));
  },
  setBtnNextConsent: (value) => {
    set(() => ({ btnNextConsent: value }));
  },
  setBtnHelpConsent: (value) => {
    set(() => ({ btnHelpConsent: value }));
  },
  setLandingHead: (value) => {
    set(() => ({ landingHead: value }));
  },
  setWelcomeMessage: (value) => {
    set(() => ({ welcomeMessage: value }));
  },
  setAccessCodeText: (value) => {
    set(() => ({ accessCodeText: value }));
  },
  setAccessInputText: (value) => {
    set(() => ({ accessInputText: value }));
  },
  setLoginSubmitButtonText: (value) => {
    set(() => ({ loginSubmitButtonText: value }));
  },
  setLoginPartIdText: (value) => {
    set(() => ({ loginPartIdText: value }));
  },
  setAccessCodeWarning: (value) => {
    set(() => ({ accessCodeWarning: value }));
  },
  setPartIdWarning: (value) => {
    set(() => ({ partIdWarning: value }));
  },
  setLoginHeaderText: (value) => {
    set(() => ({ loginHeaderText: value }));
  },
  setLoginWelcomeText: (value) => {
    set(() => ({ loginWelcomeText: value }));
  },
  setLandingHelpModalHead: (value) => {
    set(() => ({ landingHelpModalHead: value }));
  },
  setLandingHelpModalText: (value) => {
    set(() => ({ landingHelpModalText: value }));
  },
  setBtnHelpLanding: (value) => {
    set(() => ({ btnHelpLanding: value }));
  },
  setLocalHeader: (value) => {
    set(() => ({ localHeader: value }));
  },
  setPartIdText: (value) => {
    set(() => ({ partIdText: value }));
  },
  setUsercodeText: (value) => {
    set(() => ({ usercodeText: value }));
  },
  setLocalStartButtonText: (value) => {
    set(() => ({ localStartButtonText: value }));
  },
  setLocalDeleteButtonText: (value) => {
    set(() => ({ localDeleteButtonText: value }));
  },
  setLocalDownloadButtonText: (value) => {
    set(() => ({ localDownloadButtonText: value }));
  },
  setStoredQsortsHeaderText: (value) => {
    set(() => ({ storedQsortsHeaderText: value }));
  },
  setLocalDeleteModalText: (value) => {
    set(() => ({ localDeleteModalText: value }));
  },
  setLocalDeleteModalHead: (value) => {
    set(() => ({ localDeleteModalHead: value }));
  },
  setLocalParticipantsText: (value) => {
    set(() => ({ localParticipantsText: value }));
  },
  setLocalSaveDataButton: (value) => {
    set(() => ({ localSaveDataButton: value }));
  },
  setLocalSubmitSuccessModalHeader: (value) => {
    set(() => ({ localSubmitSuccessModalHeader: value }));
  },
  setLocalSubmitSuccessModalText: (value) => {
    set(() => ({ localSubmitSuccessModalText: value }));
  },
  setReturnToLocalPanelButtonText: (value) => {
    set(() => ({ returnToLocalPanelButtonText: value }));
  },
  setLocalSaveBeforeDeleteModalHeader: (value) => {
    set(() => ({ localSaveBeforeDeleteModalHeader: value }));
  },
  setLocalSaveBeforeDeleteModalText: (value) => {
    set(() => ({ localSaveBeforeDeleteModalText: value }));
  },
  setTitleBarText: (value) => {
    set(() => ({ titleBarText: value }));
  },
  setPresortAgreement: (value) => {
    set(() => ({ presortAgreement: value }));
  },
  setPresortStatements: (value) => {
    set(() => ({ presortStatements: value }));
  },
  setPresortNeutral: (value) => {
    set(() => ({ presortNeutral: value }));
  },
  setPresortDisagreement: (value) => {
    set(() => ({ presortDisagreement: value }));
  },
  setPresortImageSortInstructions: (value) => {
    set(() => ({ presortImageSortInstructions: value }));
  },
  setPresortModalHead: (value) => {
    set(() => ({ presortModalHead: value }));
  },
  setPresortModalText: (value) => {
    set(() => ({ presortModalText: value }));
  },
  setPresortPreventNavModalHead: (value) => {
    set(() => ({ presortPreventNavModalHead: value }));
  },
  setPresortPreventNavModalText: (value) => {
    set(() => ({ presortPreventNavModalText: value }));
  },
  setPresortFinishedModalHead: (value) => {
    set(() => ({ presortFinishedModalHead: value }));
  },
  setPresortFinishedModalText: (value) => {
    set(() => ({ presortFinishedModalText: value }));
  },
  setPresortOnPageInstructions: (value) => {
    set(() => ({ presortOnPageInstructions: value }));
  },
  setSortHelpModalHead: (value) => {
    set(() => ({ sortHelpModalHead: value }));
  },
  setSortHelpModalText: (value) => {
    set(() => ({ sortHelpModalText: value }));
  },
  setSortAgreement: (value) => {
    set(() => ({ sortAgreement: value }));
  },
  setSortDisagreement: (value) => {
    set(() => ({ sortDisagreement: value }));
  },
  setCondOfInst: (value) => {
    set(() => ({ condOfInst: value }));
  },
  setSortingCompleteModalHead: (value) => {
    set(() => ({ sortingCompleteModalHead: value }));
  },
  setSortingCompleteModalText: (value) => {
    set(() => ({ sortingCompleteModalText: value }));
  },
  setSortPreventNavModalHead: (value) => {
    set(() => ({ sortPreventNavModalHead: value }));
  },
  setSortPreventNavModalText: (value) => {
    set(() => ({ sortPreventNavModalText: value }));
  },
  setSortOverloadedColumnModalHead: (value) => {
    set(() => ({ sortOverloadedColumnModalHead: value }));
  },
  setSortOverloadedColumnModalText: (value) => {
    set(() => ({ sortOverloadedColumnModalText: value }));
  },
  setPostsortHeader: (value) => {
    set(() => ({ postsortHeader: value }));
  },
  setPostsortInstructions: (value) => {
    set(() => ({ postsortInstructions: value }));
  },
  setPlaceholder: (value) => {
    set(() => ({ placeholder: value }));
  },
  setPostsortAgreement: (value) => {
    set(() => ({ postsortAgreement: value }));
  },
  setPostsortDisagreement: (value) => {
    set(() => ({ postsortDisagreement: value }));
  },
  setPostsortModalHead: (value) => {
    set(() => ({ postsortModalHead: value }));
  },
  setPostsortModalText: (value) => {
    set(() => ({ postsortModalText: value }));
  },
  setPostsortPreventNavModalHead: (value) => {
    set(() => ({ postsortPreventNavModalHead: value }));
  },
  setPostsortPreventNavModalText: (value) => {
    set(() => ({ postsortPreventNavModalText: value }));
  },
  setPostsortBackButton: (value) => {
    set(() => ({ postsortBackButton: value }));
  },
  setSurveyHeader: (value) => {
    set(() => ({ surveyHeader: value }));
  },
  setSurveyModalHead: (value) => {
    set(() => ({ surveyModalHead: value }));
  },
  setSurveyModalText: (value) => {
    set(() => ({ surveyModalText: value }));
  },
  setSurveyPreventNavModalHead: (value) => {
    set(() => ({ surveyPreventNavModalHead: value }));
  },
  setSurveyPreventNavModalText: (value) => {
    set(() => ({ surveyPreventNavModalText: value }));
  },
  setBtnTransfer: (value) => {
    set(() => ({ btnTransfer: value }));
  },
  setTransferHead: (value) => {
    set(() => ({ transferHead: value }));
  },
  setTransferTextAbove: (value) => {
    set(() => ({ transferTextAbove: value }));
  },
  setTransferTextBelow: (value) => {
    set(() => ({ transferTextBelow: value }));
  },
  setTransferOkModalHeader: (value) => {
    set(() => ({ transferOkModalHeader: value }));
  },
  setTransferOkModalText: (value) => {
    set(() => ({ transferOkModalText: value }));
  },
  setTransferFailModalHeader: (value) => {
    set(() => ({ transferFailModalHeader: value }));
  },
  setTransferFailModalText: (value) => {
    set(() => ({ transferFailModalText: value }));
  },
  setFallbackMessage: (value) => {
    set(() => ({ fallbackMessage: value }));
  },
  setBtnDownload: (value) => {
    set(() => ({ btnDownload: value }));
  },
  setGoodbyeMessage: (value) => {
    set(() => ({ goodbyeMessage: value }));
  },
  setEmailSubmitBtn: (value) => {
    set(() => ({ emailSubmitBtn: value }));
  },
  setEmailCopyResultsBtn: (value) => {
    set(() => ({ emailCopyResultsBtn: value }));
  },
  setEmaiCopyAddressBtn: (value) => {
    set(() => ({ emaiCopyAddressBtn: value }));
  },
  setCopySuccessMessage: (value) => {
    set(() => ({ copySuccessMessage: value }));
  },
  setCopyFailMessage: (value) => {
    set(() => ({ copyFailMessage: value }));
  },
  setDefaultEmailFailModalText: (value) => {
    set(() => ({ defaultEmailFailModalText: value }));
  },
  setEmailBodyMessage: (value) => {
    set(() => ({ emailBodyMessage: value }));
  },
  setLinkingFallbackMessage: (value) => {
    set(() => ({ linkingFallbackMessage: value }));
  },
  setLinkingBtnText: (value) => {
    set(() => ({ linkingBtnText: value }));
  },
});

export default createMapXmlSlice;
