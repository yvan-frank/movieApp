import React, {useState} from 'react';

import {Platform, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {styles} from "../theme";
import TrendingMovies from "../components/trendingMovies";

const ios = Platform.OS === "ios";
const HomeScreen = () => {
	const [trending, setTrending] = useState([1,2,3]);
	return (
		<View>
		{/*	searchbar and logo*/}
			<SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
				<StatusBar style="light" />
				<View className="flex-row justify-between items-center mx-4">
					<Bars3CenterLeftIcon size="30" color="white" />
					<Text className="text-white text-3xl font-bold">
						<Text style={styles.text}>M</Text>ovie App
					</Text>
					<TouchableOpacity>
						<MagnifyingGlassIcon size={'30'} strokeWidth={2} color='white' />
					</TouchableOpacity>
				</View>
			</SafeAreaView>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{paddingBottom: 10}}
			>
				<TrendingMovies data={trending} />
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
