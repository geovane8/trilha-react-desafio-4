const {
  control,
  formState: { errors },
} = useForm<IFormLogin>({
  resolver: yupResolver(schema),
  mode: "onBlur",
  defaultValues,
  reValidateMode: "onChange",
});

useEffect(() => {
  setIsFormValid(Object.keys(errors).length === 0);
}, [errors]);

return (
  <Container>
    <LoginContainer>
      <Column>
        <Title>Login</Title>
        <Spacing />
        <Input
          name="email"
          placeholder="Email"
          control={control}
          errorMessage={errors?.email?.message}
        />
        <Spacing />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          control={control}
          errorMessage={errors?.password?.message}
        />
        <Spacing />
        <Button title="Entrar" disabled={!isFormValid} />
      </Column>
    </LoginContainer>
  </Container>
);
