import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

const LoginPage = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value? null : 'Password is required'),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default LoginPage