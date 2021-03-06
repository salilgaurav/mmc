package com.mmc.service;

import com.mmc.model.MemberInfo;
import com.mmc.model.PasswordInfo;
import com.mmc.model.SignUpModel;

import java.util.List;
/**
 * Created by SGaurav on 05/12/2016.
 */
public interface MemberService {

    boolean addMember(PasswordInfo passwordInfo) throws Exception;

    boolean addMember(SignUpModel signUpModel) throws Exception;

    boolean updateMember(MemberInfo memberInfo) throws Exception;

    List<MemberInfo> getAllMembers() throws Exception;

    MemberInfo getMember(String email) throws Exception;

    void deleteMember(String email) throws Exception;
}
