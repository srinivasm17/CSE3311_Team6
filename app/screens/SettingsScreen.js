import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView, Text, TouchableOpacity, Switch, Image} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
export default function Example() {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>
        <ScrollView>
          <View style={styles.profile}>
            <Image
              alt=""
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg',
              }}
              style={styles.profileAvatar} />
            <Text style={styles.profileName}>Default name</Text>
            <Text style={styles.profileEmail}>default.email@mail.com</Text>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.profileAction}>
                <Text style={styles.profileActionText}>Edit Profile</Text>
                <FeatherIcon color="#fff" name="edit" size={16} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>
            <View style={styles.sectionBody}>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}>
                  <View
                    style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                    <FeatherIcon
                      color="#fff"
                      name="globe"
                      size={20} />
                  </View>
                  <Text style={styles.rowLabel}>Language</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>English</Text>
                  <FeatherIcon
                    color="#C6C6C6"
                    name="chevron-right"
                    size={20} />
                </TouchableOpacity>
              </View>
              <View style={styles.rowWrapper}>
                <View style={styles.row}>
                  <View
                    style={[styles.rowIcon, { backgroundColor: '#007AFF' }]}>
                    <FeatherIcon
                      color="#fff"
                      name="moon"
                      size={20} />
                  </View>
                  <Text style={styles.rowLabel}>Dark Mode</Text>
                  <View style={styles.rowSpacer} />
                  <Switch
                    onValueChange={darkMode => setForm({ ...form, darkMode })}
                    value={form.darkMode} />
                </View>
              </View>
              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}>
                  <View
                    style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                    <FeatherIcon
                      color="#fff"
                      name="navigation"
                      size={20} />
                  </View>
                  <Text style={styles.rowLabel}>Location</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>Arlington, TX</Text>
                  <FeatherIcon
                    color="#C6C6C6"
                    name="chevron-right"
                    size={20} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Notifications</Text>
              <View style={styles.sectionBody}>
                <View style={[styles.rowWrapper, styles.rowFirst]}>
                  <View style={styles.row}>
                    <View
                      style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                      <FeatherIcon
                        color="#fff"
                        name="at-sign"
                        size={20} />
                    </View>
                    <Text style={styles.rowLabel}>Email Notifications</Text>
                    <View style={styles.rowSpacer} />
                    <Switch
                      onValueChange={emailNotifications =>
                        setForm({ ...form, emailNotifications })
                      }
                      value={form.emailNotifications} />
                  </View>
                </View>
                <View style={styles.rowWrapper}>
                  <View style={styles.row}>
                    <View
                      style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                      <FeatherIcon
                        color="#fff"
                        name="bell"
                        size={20} />
                    </View>
                    <Text style={styles.rowLabel}>Push Notifications</Text>
                    <View style={styles.rowSpacer} />
                    <Switch
                      onValueChange={pushNotifications =>
                        setForm({ ...form, pushNotifications })
                      }
                      value={form.pushNotifications} />
                  </View>
                </View>
                <View style={styles.rowWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.row}>
                    <View
                      style={[styles.rowIcon, { backgroundColor: '#FE3C30' }]}>
                      <FeatherIcon
                        color="#fff"
                        name="music"
                        size={20} />
                    </View>
                    <Text style={styles.rowLabel}>Sound</Text>
                    <View style={styles.rowSpacer} />
                    <Text style={styles.rowValue}>Default</Text>
                    <FeatherIcon
                      color="#C6C6C6"
                      name="chevron-right"
                      size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.contentFooter}>🥪UTA 2024</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  contentFooter: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  /** Header */
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
  },
  headerSubtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    marginTop: 6,
  },
  /** Profile */
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  /** Section */
  section: {
    paddingTop: 12,
  },
  sectionTitle: {
    marginVertical: 8,
    marginHorizontal: 24,
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sectionBody: {
    paddingLeft: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 16,
    height: 50,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowFirst: {
    borderTopWidth: 0,
  },
  rowIcon: {
    width: 30,
    height: 30,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 17,
    fontWeight: '500',
    color: '#8B8B8B',
    marginRight: 4,
  },
});