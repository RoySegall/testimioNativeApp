import React, {useMemo} from "react";
import {FlatList, Text, View} from 'react-native'
import {style} from "./style";
import {observer} from "mobx-react-lite";
import {branchesStore, userStore} from "../../Stores";

const Item = ({ title }: {title: string}) => <View><Text>{title}</Text></View>;
const renderItem = ({ item }: {item: {title: string}}) => <Item title={item.title} />;

export const Home: React.FC = observer(() => {
    const BranchesStore = useMemo(() => branchesStore, [branchesStore]);
    const UserStore = useMemo(() => userStore, [userStore]);

    const numberOfTests = 20;
    const tests = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'STP-1: Login scenario',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'STP-191: Add comment to test',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'STP-10: Handle missing image',
        },
    ];

    return <View style={style.container}>

        <View style={style.card}>
            <Text style={style.text}>Welcome {UserStore.user?.username}</Text>
            <Text style={style.text}>Current branch: {BranchesStore.branch.name}</Text>
        </View>

        <View style={style.card}>
            <Text style={style.text}>Number of tests</Text>
            <Text style={style.text}>{numberOfTests}</Text>
        </View>

        <View style={[style.card, style.cardColumn]}>
            <Text style={style.title}>Recent added tests</Text>

            <FlatList
                data={tests}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>

        <View style={[style.card, style.cardColumn]}>
            <Text style={style.title}>Recent runs</Text>

            <FlatList
                data={tests}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    </View>;
});
