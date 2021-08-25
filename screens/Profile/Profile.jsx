import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Image, Share, Text, TouchableOpacity } from "react-native";
import HelperDialog from "../../components/HelperDialog/HelperDialog";
// import avatar from "../../assets/images/avatar.png";

import { styles } from "./styles";
import { colors } from "../../constants/Colors";
import SettingsItemWrapper from "../../components/SettingsItemWrapper/SettingsItemWrapper";
import AppButton from "../../components/AppButton/AppButton";
import { auth } from "../../firebase/config";
import { setCurrentUser } from "../../redux/user/actions";

const Profile = () => {
  const user = useSelector(({ user }) => user.currentUser);
  const [dialogVisible, setDialogVisible] = useState(false);
  useEffect(() => {}, []);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSignout = () => {
    // LOGOUT_USER();
    dispatch(setCurrentUser(null));
    auth.signOut();
  };
  const onShare = async () => {
    const uri = "../../assets/logos/bb.png";

    Share.share(
      {
        title: "BoundlessInvestment",
        url: uri,
        message: `Hey there, I'm investing with BoundlessInvestment. Join me! Download it here:https://www.boundlessservicesng.com`,
      },
      {
        excludedActivityTypes: [
          // 'com.apple.UIKit.activity.PostToWeibo',
          "com.apple.UIKit.activity.Print",
          // "com.apple.UIKit.activity.CopyToPasteboard",
          // 'com.apple.UIKit.activity.AssignToContact',
          "com.apple.UIKit.activity.SaveToCameraRoll",
          "com.apple.UIKit.activity.AddToReadingList",
          // 'com.apple.UIKit.activity.PostToFlickr',
          // 'com.apple.UIKit.activity.PostToVimeo',
          // 'com.apple.UIKit.activity.PostToTencentWeibo',
          "com.apple.UIKit.activity.AirDrop",
          "com.apple.UIKit.activity.OpenInIBooks",
          "com.apple.UIKit.activity.MarkupAsPDF",
          "com.apple.reminders.RemindersEditorExtension",
          // 'com.apple.mobilenotes.SharingExtension',
          // 'com.apple.mobileslideshow.StreamShareService',
          // 'com.linkedin.LinkedIn.ShareExtension',
          // 'pinterest.ShareExtension',
          // 'com.google.GooglePlus.ShareExtension',
          // 'com.tumblr.tumblr.Share-With-Tumblr',
          // 'net.whatsapp.WhatsApp.ShareExtension', //WhatsApp
        ],
      }
    );
  };
  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View
              style={{ flexDirection: "row", alignItems: "center", width: 60 }}
            >
              <Ionicons name="chevron-back-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.routeTitle}>Profile</Text>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: 60,
          }}
        >
          <TouchableOpacity
            style={styles.circle}
            onPress={() => setDialogVisible(true)}
          >
            <Feather name="more-vertical" size={20} color="black" />
          </TouchableOpacity>
        </View> */}
      </View>
      <HelperDialog
        visible={dialogVisible}
        setDialogVisible={setDialogVisible}
        title={"More"}
      >
        <TouchableOpacity
          style={[styles.modalTextButton]}
          onPress={handleSignout}
        >
          <AntDesign
            name="edit"
            size={20}
            color="black"
            style={{ marginRight: 20 }}
          />
          <Text style={[styles.modalText]}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.modalTextButton]}
          onPress={handleSignout}
        >
          <Feather
            name="log-out"
            size={20}
            color="red"
            style={{ marginRight: 20 }}
          />
          <Text style={[styles.modalText, { color: "red" }]}>Logout</Text>
        </TouchableOpacity>
      </HelperDialog>
      <View style={styles.container}>
        <View style={styles.userPreview}>
          <View style={styles.userImageContainer}>
            <Ionicons name="person-circle" size={100} color="#dddcdb" />
          </View>
          <View style={styles.usernameContainer}>
            <Text
              style={styles.username}
            >{`${user.first_name} ${user.last_name}`}</Text>
            <Text style={styles.username}>{user.phone}</Text>
          </View>
          <View style={{ marginLeft: "auto", marginRight: 20 }}>
            <TouchableOpacity style={{ marginVertical: 6 }} onPress={() => {}}>
              <AntDesign name="edit" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginVertical: 6 }}
              onPress={handleSignout}
            >
              <Feather name="log-out" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.settings}>
          <SettingsItemWrapper
            title={"About the company"}
            icon={
              <Entypo name="info-with-circle" size={20} color={colors[0]} />
            }
            onPress={() => navigation.navigate("About")}
          />
          <SettingsItemWrapper
            title={"Comunucation"}
            icon={<Ionicons name="mail" size={20} color={colors[0]} />}
            onPress={() => navigation.navigate("Communication")}
          />
          <SettingsItemWrapper
            title={"Give Feedback"}
            icon={<MaterialIcons name="message" size={20} color={colors[0]} />}
            onPress={() => navigation.navigate("GiveFeedback")}
          />
          <SettingsItemWrapper
            title={"Bug Report"}
            icon={<Entypo name="bug" size={20} color={colors[0]} />}
            onPress={() => navigation.navigate("ReportBug")}
          />
          <SettingsItemWrapper
            title={"Share the app"}
            icon={<Ionicons name="md-share" size={20} color={colors[0]} />}
            onPress={onShare}
          />
        </View>
        <View style={styles.invite}>
          <Text style={styles.inviteTextMain}>Blossom Mastermind</Text>
          <Text style={styles.inviteTextSub}>Version 1.0.0</Text>
          <Text style={styles.inviteTextSub}>From</Text>
          <Text style={styles.inviteTextBold}>{user.refer_code || "XEAM"}</Text>
        </View>
      </View>
    </>
  );
};

export default Profile;
