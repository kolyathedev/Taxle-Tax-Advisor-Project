import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import QuestionItem from './questionItem';
import QuestionCheckbox from './questionCheckbox';
// import QuestionDisplayEnd from './questionDisplayEnd';

const Questions = () => {
  const [qState, setFormState] = useState([
    {
      name: 'mailingList',
      title: 'Are you happy to be added to my mailing list?',
      appear: true,
      notSure: false,
      value: null,
      key: 1,
    },
    {
      name: 'residency',
      title: 'Are you a UK resident?',
      appear: false,
      notSure: false,
      value: null,
      key: 2,
    },

    {
      name: 'trReq',
      title: 'Do you need a tax return prepared for the year to the 5th April?',
      appear: false,
      notSure: false,
      value: null,
      key: 3,
    },

    {
      name: 'firstTr',
      title: 'Is this the first tax return you will have prepared?',
      appear: false,
      notSure: false,
      value: null,
      key: 4,
    },

    {
      name: 'accountant',
      title: 'Do you have an accountant or tax adviser at the moment?',
      appear: false,
      notSure: false,
      value: null,
      key: 5,
    },

    {
      name: 'futureTr',
      title: 'Do you need a tax return prepared for the year to 5th April 2022?',
      appear: false,
      notSure: false,
      value: null,
      key: 6,
    },

    {
      name: 'rentalProperty',
      title: 'Do you own a rental property?',
      appear: false,
      notSure: false,
      value: null,
      key: 7,
    },

    {
      name: 'noOfRentals',
      title: 'How many rental properties do you own?',
      appear: false,
      notSure: false,
      value: null,
      key: 8,
    },
    {
      name: 'ownershipRental',
      title: 'Do you own the rental property solely or jointly??',
      appear: false,
      notSure: false,
      value: null,
      key: 9,
    },
    {
      name: 'ownershipRentals',
      title: 'Do you own the rental properties solely, jointly or a mixture of the two?',
      appear: false,
      notSure: true,
      value: null,
      key: 10,
    },
    {
      name: 'letAgent',
      title: 'Do you have a letting agent?',
      appear: false,
      notSure: false,
      value: null,
      key: 11,
    },
    {
      name: 'employed',
      title: 'Are you employed?',
      appear: false,
      notSure: false,
      value: null,
      key: 12,
    },

    {
      name: 'jobNature',
      title: 'What do you do for a living?',
      appear: false,
      notSure: false,
      value: null,
      key: 13,
    },

    {
      name: 'soi',
      title: 'Do you receive a pension?',
      appear: false,
      notSure: false,
      value: null,
      key: 14,
    },

    {
      name: 'investments',
      title: 'Do you have income from investments (dividends)?',
      appear: false,
      notSure: false,
      value: null,
      key: 15,
    },

    {
      name: 'broker',
      title: 'Are your investments managed by a broker?',
      appear: false,
      notSure: false,
      value: null,
      key: 16,
    },

    {
      name: 'selfEmp',
      title: 'Are you self-employed?',
      appear: false,
      notSure: false,
      value: null,
      key: 17,
    },

    {
      name: 'natureOfTrade',
      title: 'What is the nature of your trade?',
      appear: false,
      notSure: false,
      value: null,
      key: 18,
    },

    {
      name: 'highEarners',
      title: 'Do you earn over £50,000 a year?',
      appear: false,
      notSure: false,
      value: null,
      key: 19,
    },

    {
      name: 'propCapGains',
      title: 'Have you sold a property recently and need to let HMRC know?',
      appear: false,
      notSure: false,
      value: null,
      key: 20,
    },
    {
      name: 'propSaleDetails',
      title: 'When did the property sale complete?',
      appear: false,
      notSure: false,
      value: null,
      key: 21,
    },
    {
      name: 'otherCapGains',
      title: 'Have you sold any other assets that HMRC may need to know about?',
      appear: false,
      notSure: false,
      value: null,
      key: 22,
    },
  ]);

  // Find the array index of any objexts which are set to true. Not needed anymore as I have copied this into nextUpdate below.
  // const arrayChecker = () => {
  //   let holdingArray = [...qState];
  //   let testArray = holdingArray.filter((el) => el.appear);
  //   console.log(testArray);
  //   // console.log(typeof testArray);
  //   // console.log(testArray[0].key);
  //   testArray[0].key;
  // };

  // Not sure if I need this quite yet
  // useEffect(() => {
  //   arrayChecker();
  // }, [qState]);

  // COULD USE THIS FOR A MASTER MENU THAT SENDS CUSTOMER TO ANY QUESTION??
  // const onClick = (i) => {
  //   let newArr = [...qState];
  //   newArr[i].appear = true;
  //   setFormState(newArr);
  // };

  const mailUpdate = () => {
    // take the current array and set mailing to appear: false, and uk residency appear to true.
    let newArr = [...qState];
    newArr[1].appear = true;
    newArr[0].appear = false;
    // set the basic questions to hide
    let basicsArray = [...textQstate];
    basicsArray[0].appear = false;
    // return the new states. I put this at the end as I think this ordering = more sound logic.
    setTextQstate(basicsArray);
    setFormState(newArr);
    setHideBack(false);
    setHideNext(true);
  };

  const nextUpdate = () => {
    // filter out the current state and return only the question which is currently set to appear.

    let holdingArray = [...qState];
    let testArray = holdingArray.filter((el) => el.appear);
    // console.log(typeof testArray);
    // console.log(testArray[0].key);

    if (testArray[0].key == 1) {
      mailUpdate();
    } else {
      // extract out of this new filtered array, the key of that object. As array's are 0 indexed, we can simply use this key to set the next array item object's appear to true.

      let nextKey = testArray[0].key;
      let newArr = [...qState];

      // this should set next Q to appear true, previous to false.
      newArr[nextKey].appear = true;
      newArr[nextKey - 1].appear = false;

      // return the new state of the checkBox questions . I put this at the end as I think this ordering = more sound logic.
      setFormState(newArr);
    }
  };

  const backUpdate = () => {
    let holdingArray = [...qState];
    let testArray = holdingArray.filter((el) => el.appear);
    let arrayPos = holdingArray.indexOf(testArray[0]);
    console.log(arrayPos);
    // Test to see if we're back at the start of the questionaire.
    if (arrayPos == 1) {
      setHideBack(true);
      setHideNext(false);
      let basicArray = [...textQstate];
      basicArray[0].appear = true;
      setTextQstate(basicArray);
      holdingArray[arrayPos].appear = false;
      holdingArray[arrayPos - 1].appear = true;
      setFormState(holdingArray);
    } else {
      holdingArray[arrayPos].appear = false;
      holdingArray[arrayPos - 1].appear = true;

      setFormState(holdingArray);
    }
  };

  // on each click we pull out the state into a holding array using ...operator. Then we filter out which section is appearing using filter method.

  // we then get the key of the section. This could probably be skipped by using array.indexOf ? This works. will remove code to extract key
  const onClick = (e) => {
    // console.log(e.target.value);
    let holdingArray = [...qState];
    let testArray = holdingArray.filter((el) => el.appear);
    // let changeKey = testArray[0].key;
    // console.log(holdingArray[changeKey - 1]);
    let arrayPos = holdingArray.indexOf(testArray[0]);
    console.log(arrayPos);
    holdingArray[arrayPos].value = e.target.value;
    setFormState(holdingArray);

    // console.log(holdingArray[changeKey - 1]);

    if (e.target.value === 'No' && arrayPos === 2) {
      // test to see if user answers yes and the current questions is Tax Return Requirement ( key 3 )
      console.log('key 3 ');
      // get the current key of TR req. Well we know it's gonna be three you god damn fool.
      // get a fresh copy of the state.
      let newArr = [...qState];
      // set the current questions Tax return req to false
      newArr[arrayPos].appear = false;
      // set the Future tax return req question to true, skipping the other q's.
      newArr[5].appear = true;
      // update global state with the new question to display in the page.
      setFormState(newArr);
    }
    // owns a rental property?
    else if (e.target.value === 'No' && arrayPos === 6) {
      console.log('key 6');
      let newArr = [...qState];
      newArr[arrayPos].appear = false;
      newArr[11].appear = true;
      setFormState(newArr);
    }
    // No. of Rental properties
    else if (e.target.value != '1' && arrayPos === 7) {
      console.log('noOfRentals');
      let newArr = [...qState];
      newArr[arrayPos].appear = false;
      newArr[9].appear = true;
      setFormState(newArr);
    }
    // solely or jointly one rental
    else if (arrayPos === 8) {
      console.log('soley or jointly one ');
      let newArr = [...qState];
      newArr[arrayPos].appear = false;
      newArr[10].appear = true;
      setFormState(newArr);
    }
    // Are you employed??
    else if (e.target.value == 'No' && arrayPos === 11) {
      console.log('Employed?');
      let newArr = [...qState];
      newArr[arrayPos].appear = false;
      newArr[13].appear = true;
      setFormState(newArr);
    }

    //Income from investments No??
    else if (e.target.value == 'No' && arrayPos === 14) {
      console.log('investments no?');
      let newArr = [...qState];
      newArr[arrayPos].appear = false;
      newArr[16].appear = true;
      setFormState(newArr);
    }
    //Self Employed No??
    else if (e.target.value == 'No' && arrayPos === 16) {
      console.log('self emp no?');
      let newArr = [...qState];
      newArr[arrayPos].appear = false;
      newArr[18].appear = true;
      setFormState(newArr);
    }
    // Prop cap gains none
    else if (e.target.value == 'No' && arrayPos === 19) {
      console.log('prop cap gains no?');
      let newArr = [...qState];
      newArr[arrayPos].appear = false;
      newArr[21].appear = true;
      setFormState(newArr);
    }
    // Final question
    else if (arrayPos === 21) {
      console.log('LastQuestion');
      let newArr = [...qState];
      newArr[arrayPos].appear = false;
      setThankYouNote(true);
      setHideSubmit(false);
      console.log(qState);
      console.log(textQstate);
    } else {
      nextUpdate();
    }
  };

  // Onchange event for job nature and nature of employment
  const onChange = (e) => {
    e.preventDefault();
    let holdingArray = [...qState];
    let testArray = holdingArray.filter((el) => el.appear);
    let arrayPos = holdingArray.indexOf(testArray[0]);
    console.log(arrayPos);
    holdingArray[arrayPos].value = e.target.value;
    setFormState(holdingArray);
  };

  // !! with some of the above conditions, all I am really doing is skipping two ahead in some cases. This could be tidied up at some point with a global function called to skip two ahead. Like nextUpdate2() for example. !!

  // Text Question State
  const [textQstate, setTextQstate] = useState([
    {
      name: 'basics',
      key: 1,
      appear: true,
      value: null,
      question: 'lets start with the basics...',
    },
  ]);

  // create state for initial basic answers
  const [basicsState, setBasicsState] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const onChangeBasics = (e) => {
    setBasicsState({ ...basicsState, [e.target.name]: e.target.value });
    console.log(basicsState);
  };

  // Hide the back and forth buttons state
  const [hideBack, setHideBack] = useState(true);

  const [hideNext, setHideNext] = useState(true);

  // Hide the submit button state.
  const [hideSubmit, setHideSubmit] = useState(true);
  // thank you note state
  const [thankYouNote, setThankYouNote] = useState(false);

  useEffect(() => {
    console.log(qState);
  }, [qState]);

  // Next Button appear to text questions only
  let nextButton;
  let tempState = [...qState];
  console.log(tempState);
  if (tempState[12].appear || tempState[17].appear) {
    nextButton = (
      <p className="hero-cta">
        <button className="cta-btn cta-btn--hero mt-5" onClick={nextUpdate}>
          {' '}
          Next...{' '}
        </button>
      </p>
    );
  } else {
    nextButton = null;
  }

  return (
    <Form name="questionnaire" data-netlify="true" data-netlify-honeypot="bot-field" method="POST">
      <input type="hidden" name="form-name" value="questionnaire" />
      <QuestionItem
        section={textQstate[0]}
        appear={textQstate[0].appear}
        key={textQstate[0].key}
        onChange={onChangeBasics}
      />

      {qState.map((section) => (
        <QuestionCheckbox
          section={section}
          appear={section.appear}
          key={section.key}
          notSureProp={section.notSure}
          onClick={onClick}
          onChange={onChange}
        />
      ))}
      {nextButton}
      {hideBack ? null : (
        <p className="hero-cta">
          <button className="cta-btn cta-btn--hero mt-5" onClick={backUpdate}>
            {' '}
            Back...{' '}
          </button>
        </p>
      )}
      {hideNext ? null : (
        <p className="hero-cta">
          <button className="cta-btn cta-btn--hero mt-5" onClick={nextUpdate}>
            {' '}
            Next...{' '}
          </button>
        </p>
      )}
      {hideSubmit ? null : (
        <Button className="cta-btn cta-btn--hero " type="submit">
          <p className="hero-cta">Submit and send me a quote! </p>
        </Button>
      )}
      {thankYouNote ? (
        <div>
          <p>
            Thank you for answering the questions. This helps me to piece together your tax affairs
            and provide a quote. If you have a general query, please ask. I will be in contact
            within 24 hours.
          </p>
        </div>
      ) : null}
    </Form>
  );
};

export default Questions;
