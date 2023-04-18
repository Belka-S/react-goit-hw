import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import { Form, Field, Label, ErrorMessage } from './TransactionForm.styled';

const tansactionSchema = Yup.object({
  type: Yup.string()
    .oneOf(['invoice', 'payment', 'withdrawal', 'deposit'])
    .required(' required'),
  amount: Yup.number().positive(' !!!>0').required(' required'),
  currency: Yup.string().min(2, ' short').max(3, ' long').required(' required'),
});

export const TransactionForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ type: 'payment', amount: 0, currency: 'all' }}
    validationSchema={tansactionSchema}
    onSubmit={(values, actions) =>
      onSubmit({ ...values, id: nanoid() }, actions.resetForm())
    }
  >
    <Form>
      <Label>
        Type
        <ErrorMessage name="type" component="span" />
        <Field as="select" name="type">
          <option value="invoice">invoice</option>
          <option value="payment">payment</option>
          <option value="withdrawal">withdraw</option>
          <option value="deposit">deposit</option>
        </Field>
      </Label>
      <Label>
        Amount
        <ErrorMessage name="amount" component="span" />
        <Field name="amount" type="number" step="10"></Field>
      </Label>
      <Label>
        Currency
        <ErrorMessage name="currency" component="span" />
        <Field name="currency"></Field>
      </Label>
      <button type="submit">Save</button>
    </Form>
  </Formik>
);
