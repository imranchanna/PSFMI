import React from 'react'
import Navbar from '../Navbar/Navbar';
import "./Firearms.css";
import Attach from "../../../Assets/images/Attach.png";

function Firearms() {

  function Select({text}) {
    console.log(text);
    if(text===text1)
    return (
      <select onChange={handleChange} className='NIN1 text-secondary' name="fruits" id="fruit-select">
        {text1.map((option,title) => {
          return (<option class="text-light" key={title} value={option.value}>{option.text}</option>)
        })
        }
      </select>
    )
    if(text===text2)
    return (
      <select onChange={handleChange} className='NIN1 text-secondary' name="fruits" id="fruit-select">
        {text2.map((option,title) => {
          return (<option class="text-light" key={title} value={option.value}>{option.text}</option>)
        })
        }
      </select>
    )
    if(text===text3)
    return (
      <select onChange={handleChange} className='NIN1 text-secondary' name="fruits" id="fruit-select">
        {text3.map((option,title) => {
          return (<option class="text-light" key={title} value={option.value}>{option.text}</option>)
        })
        }
      </select>
    )
    if(text===text4)
    return (
      <select onChange={handleChange} className='NIN1 text-secondary' name="fruits" id="fruit-select">
        {text4.map((option,title) => {
          return (<option class="text-light" key={title} value={option.value}>{option.text}</option>)
        })
        }
      </select>
    )
    if(text===text5)
    return (
      <select onChange={handleChange} className='NIN1 text-secondary' name="fruits" id="fruit-select">
        {text5.map((option,title) => {
          return (<option class="text-light" key={title} value={option.value}>{option.text}</option>)
        })
        }
      </select>
    )
}
const handleChange = event => {
    console.log(event.target.value);
  };
const text1=[ {value: 'Type', text: 'Type'},
      {value: 'Pistol', text: 'Pistol'},
      {value: 'Revolver', text: 'Revolver '},
      {value: 'Rifle', text: 'Rifle'},
      {value: 'Shotgun', text: 'Shotgun'},
    ];
    const text2=[ {value: 'Caliber', text: 'Caliber'},
      {value: '9mm', text: '9mm'},
      {value: '8.6mm', text: '8.6mm'},
      {value: '8mm', text: '8mm '},
      {value: '7.9mm', text: '7.9mm'},
      {value: '7.62mm', text: '7.62mm'},
      {value: '7mm', text: '7mm'},
      {value: '6.5mm', text: '6.5mm'},
      {value: '6mm', text: '6mm'}
    ];
    const text3=[ {value: 'Brand/Manufacture', text: 'Brand/Manufacture'},
      {value: 'Glock', text: 'Glock'},
      {value: 'Smith & Wesson (S&W)', text: 'Smith & Wesson (S&W) '},
      {value: 'Springfield', text: 'Springfield'},
      {value: 'Benelli', text: 'Benelli'},
      {value: 'Beretta', text: 'Beretta'},
      {value: 'Colt', text: 'Colt'},
      {value: 'Winchester', text: 'Winchester'},
      {value: 'Wilson Combat', text: 'Wilson Combat'},
    ];
    const text4=[ {value: 'Company PSO', text: 'Company PSO'},
      {value: 'SwipeWire', text: 'SwipeWire'},
      {value: 'Secure Smarter', text: 'Secure Smarter '},
      {value: 'Formonix', text: 'Formonix '},
      {value: 'Branding', text: 'Branding '},
      {value: 'Cloudreve', text: 'Cloudreve '},
    ];
    const text5=[ {value: 'Status', text: 'Status'},
      {value: 'OUT OF SERVICE/DECOMMOSIONED', text: 'OUT OF SERVICE/DECOMMOSIONED'},
      {value: 'UNDER INVESTIGATION', text: 'UNDER INVESTIGATION '},
      {value: 'MARKED', text: 'MARKED'},
      {value: 'UN_MARKED', text: 'UN_MARKED'},
    ];

  function Textarea({placeholder}) {
    console.log(placeholder);
    if(placeholder===placeholder)
    return (
      <div className="contentF2">
         <textarea className='NIN2' placeholder={placeholder} ></textarea>
      </div>
    )
    if(placeholder===placeholder1)
    return (
      <div className="contentF2">
         <textarea className='NIN2' placeholder={placeholder1} ></textarea>
        
      </div>
    )
      }
      const placeholder = ['Supplier details (Name and address)'];
      const placeholder1 = ['Message'];
  return (
    <>
    <Navbar/>
      <div className='container-p'>
            <div className='box-p'>
            <div className='form'>
            <Select text={text1}/>
            <input type="text" className='NIN1' placeholder='Manufacturer Serial Number'/>
            <Select text={text2}/>
             <Select text={text3}/>
            <input type="text" className='NIN1' placeholder='Police Serial Number'/>
            <input type="text" className='NIN1' placeholder='Firearm License Number'/>
            <input type="date" className='NIN1'/>
            <input type="date" className='NIN1' placeholder='Date of birth'/>
            <input type="text" className='NIN1' placeholder='Location'/>
            </div>

            <div className='contentF'>
            <div className='contentM'>
            <h2 className='textM'>Assign</h2>
            <div className='checkbox1'>
                <div class="check">
                <input className='radio2' type="radio" name="gender" value="A" />
                <label class="check-label" for="A">Firearms to PSO</label>
                </div>
                <div class="check">
                <input className='radio2' type="radio" name="gender" value="B" checked />
                <label class="check-label" for="B">Individual</label>
                </div>
                    </div>
                    </div>
                     <Select text={text4}/>
            </div>
            <Textarea placeholder={placeholder}/>
            <div className='contentF'>
            <div className='contentM'>
            <h2 className='textM'>Ownership</h2>
            <div className='checkbox1'>
                <div class="check">
                <input className='radio2' type="checkbox" name="gender" value="C" />
                <label class="check-label" for="C">Police Leased</label>
                </div>
                <div class="check">
                <input className='radio2' type="checkbox" name="gender" value="D" />
                <label class="check-label" for="D">Owned</label>
                </div>
                    </div>
                    </div>
                    <div className='contextF'>
                     <Select text={text5}/>
            <img className='AttachC' src={Attach} alt="pokemon"></img>
            </div>
            </div>
            <Textarea placeholder={placeholder1}/>
            <div className='contextC2'>
                  <p>Attach firearm license & permit</p>
                  <img className='Attach2' src={Attach} alt="pokemon" ></img>
                </div>
                <div className='buttons'>
          <button type="button" class="btn btn-outline-secondary">Clear</button>
<button type="button" class="btn btn-outline-success">Save</button>
          </div>
            </div>
            </div>
    </>
  )
}

export default Firearms