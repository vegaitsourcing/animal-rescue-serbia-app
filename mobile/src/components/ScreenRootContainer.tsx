import {useNavigation} from '@react-navigation/native';
import React, {ReactNode, useCallback} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ColorPallet} from '../resources/ColorPallet';
import {BackButton} from './BackButton';
import {StripedBar} from './StripedBar';
import Logo from '../assets/icons/megaphoneLogo.svg';

type ScreenRootContainerProps = {
  title: string;
  children: ReactNode;
  showLogo?: boolean;
  hideGoBack?: boolean;
};

export const ScreenRootContainer = ({
  children,
  title,
  showLogo,
  hideGoBack,
}: ScreenRootContainerProps) => {
  const navigation = useNavigation();

  const onBackPress = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.headerContainer}>
        {!hideGoBack && (
          <View style={styles.backButton}>
            <BackButton text="Nazad" onPress={onBackPress} />
          </View>
        )}
        <View style={styles.header}>
          <Text numberOfLines={2} style={styles.headerText}>
            {title}
          </Text>
        </View>
      </View>
      <View>
        {showLogo ? (
          <View style={styles.headerLogoContainer}>
            <Logo width={64} height={64} />
          </View>
        ) : null}
        <StripedBar />
      </View>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: ColorPallet.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 33,
    textTransform: 'uppercase',
    color: ColorPallet.plainWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 10,
  },
  headerContainer: {
    height: Platform.OS === 'ios' ? 120 : 150,
  },
  headerLogoContainer: {
    position: 'absolute',
    zIndex: 1,
    transform: [{translateY: -24}],
    alignSelf: 'center',
  },
  safeAreaContainer: {
    height: 180,
    flexGrow: 1,
    marginBottom: Platform.OS === 'ios' ? -40 : 0,
  },
});
