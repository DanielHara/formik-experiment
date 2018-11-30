import React, { Component } from 'react';
import { Formik, Field } from 'formik';

const initialValues = {
  name: 'Bob',
  email: 'bob@gmail.com'
};


class App extends Component {
  render() {
    return (
      <div className="App">
        Learning Formik!
        <Formik 
          initialValues={initialValues}
          onSubmit={(values) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
         >
          {() => <div>

            <div className="row">
              <div className="col">
                <Field name="name" type="text" />
              </div>
              <div className="col">
                <Field name="email" type="email" />
              </div>
              <div className="col">
                <button type="button" >
                  Submit
                </button>
              </div>
            </div>

          </div>
          }
        </Formik>
      </div>
    );
  }
}

export default App;
