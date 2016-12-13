package com.mmc.service;

import com.mmc.model.LoginResponse;
import com.mmc.model.PasswordInfo;

/**
 * Created by SGaurav on 09/12/2016.
 */
public interface LoginService {

    LoginResponse login(PasswordInfo passwordInfo) throws Exception;
}
