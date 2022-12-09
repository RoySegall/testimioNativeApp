import {FC, useMemo} from 'react';
import {Button, Text, TextInput, View} from "react-native";
import {style} from './NotLoggedIn.styles'
import {observer, useLocalObservable} from "mobx-react-lite";
import {userStore} from '../../Stores'

export const NotLoggedIn: FC = observer(() => {
    const UserStore = useMemo(() => userStore, [userStore]);

    const localStore = useLocalObservable(() => ({
        username: '',
        password: '',
        changeName(value: string) {
            this.username = value;
        },
        changePassword(value: string) {
            this.password = value;
        },
        submit() {
            UserStore.login(this.username, this.password)
        }

    }))

    return <View style={style.container}>
        <View style={style.form}>

            <Text>{userStore.name}</Text>

            <View style={style.section}>
                <Text>Username</Text>
                <TextInput
                    value={localStore.username}
                    autoCapitalize='none'
                    style={style.input}
                    onChangeText={localStore.changeName}
                    placeholder={'Enter username'} />
            </View>
            <View style={style.section}>
                <Text>Password</Text>
                <TextInput
                    textContentType='password'
                    autoCapitalize='none'
                    value={localStore.password}
                    style={style.input}
                    onChangeText={localStore.changePassword}
                    placeholder={'Enter password'} />
            </View>

            <Button title={'Submit'} onPress={localStore.submit} />

        </View>

    </View>
});
