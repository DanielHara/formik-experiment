import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';

const initialValues = {
  name: '',
  email: ''
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
                  <Field name="name">
                    {
                      ({ field, form }) => (
                        <input {...field} type="text" placeholder="Bob" />
                      )
                    }
                  </Field>
                </div>
                <div className="col">
                  <Field name="email">
                    {
                      ({ field, form }) => (
                        <input {...field} type="email" placeholder="bob@gmail.com" />
                      )
                    }
                  </Field>
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
