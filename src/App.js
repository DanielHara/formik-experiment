import React, { Component } from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';

const initialValues = {
  friends: [],
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
            alert(JSON.stringify(values, null, 2));
            /*
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500); */
          }}
         >
          {({ values, isSubmitting }) =>
            <Form>
              <FieldArray name="friends">
                {({ push, remove }) => (
                  <React.Fragment>
                    {
                      values.friends && values.friends.length > 0 && 
                      values.friends.map((friend, index) => (
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
                        </div>
                    ))
                    }
                    <button type="button" onClick={() => { push(); }}>
                      Add friend
                    </button>
                  </React.Fragment>
                )}
              </FieldArray >
              <button type="submit" disabled={isSubmitting}>
                Invite
              </button>
            </Form>        
          }
        </Formik>
      </div>
    );
  }
}

export default App;
