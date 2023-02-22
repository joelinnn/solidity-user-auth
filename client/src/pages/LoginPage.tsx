import { TextInput, Button, Group, Box, Checkbox } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useContract, useContractWrite } from '@thirdweb-dev/react';
import { v4 as uuidv4 } from 'uuid';

const LoginPage = () => {

  const { contract } = useContract('0x899aC2Ea8786c2a8874D59bde179D9abd8af0160')
  const { mutateAsync: register } = useContractWrite(contract, 'register')
  const { mutateAsync: login } = useContractWrite(contract, 'login')

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      register: false
    },

    validate: {
      name: (value) => (value ? null : 'Name is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value ? null : 'Password is required'),
    },
  });

  const loginHandler = async (values: any) => {
    const _address = values.email
    const _password = values.password
    const data = await login([ _address, _password ])
    console.log('successful login', data)
  }

  const registerHandler = async (values: any) => {
    const _cnic = uuidv4();
    const _name = values.name
    const _address = values.email
    const _password = values.password

     const data = await register([ _address, _name, _password, _cnic ])
     console.log('successful register', data)
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => registerHandler(values))}>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="John Doe"
          {...form.getInputProps('name')}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          withAsterisk
          label="Password"
          placeholder="password123"
          {...form.getInputProps('password')}
        />
        <Checkbox
          mt="md"
          label="Register"
          {...form.getInputProps('register', { type: 'checkbox' })}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default LoginPage