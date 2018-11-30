import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';

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
          {({ isSubmitting }) =>
            <Form>
              <div className="row">
                <div className="col">
                  <Field name="name" type="text" />
                </div>
                <div className="col">
                  <Field name="email" type="email" />
                </div>
                <div className="col">
                  <button type="button" >
                    X
                  </button>
                </div>
                <button type="button" disabled={isSubmitting}>
                  Add friend
                </button>
                <button type="submit" disabled={isSubmitting}>
                  Invite
                </button>
              </div>
            </Form>        
          }
        </Formik>
      </div>
    );
  }
}

export default App;
