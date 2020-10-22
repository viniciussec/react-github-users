import pullUser from './pull'

test('testing user', async () => {
    expect((await pullUser('viniciussec')).login).toBe('viniciussec')
})

test('testing user location', async () => {
    expect((await pullUser('viniciussec')).location).toBe('Fortaleza - CE, Brazil')
})

test('testing user name', async () => {
    expect((await pullUser('viniciussec')).name).toBe('Vinicius Secundino')
})


