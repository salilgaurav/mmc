package com.mmc.controller;

import com.mmc.model.Album;
import com.mmc.model.Response;
import com.mmc.service.AlbumServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
/**
 * Created by SGaurav on 09/12/2016.
 */
@RestController
@RequestMapping(value = "/album")
@CrossOrigin(origins = "*")
public class AlbumController {

    @Autowired
    private AlbumServiceImpl albumService;


    @RequestMapping(value = "",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE + ";charset=utf-8")
    public ResponseEntity<Response> login(@RequestBody Album album, HttpServletRequest request,
                                               HttpServletResponse response) {
        Response res = new Response();
        try {
            albumService.add(album);
            res.setStatus("SUCCESS");
            res.setStatusCode("S-200");
            res.setStatusMsg("Added successfully!");
            return new ResponseEntity<Response>(res, HttpStatus.OK);
        }catch (Exception e){
            res.setStatus("ERROR");
            res.setStatusCode("E-200");
            res.setStatusMsg("Email already registered!");
            return new ResponseEntity<Response>(res, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE + ";charset=utf-8")
    public ResponseEntity<?> login( HttpServletRequest request,
                                          HttpServletResponse response) {
        Response res = new Response();
        try {
            return new ResponseEntity<List<Album>>(albumService.get(), HttpStatus.OK);
        }catch (Exception e){
            res.setStatus("ERROR");
            res.setStatusCode("E-200");
            res.setStatusMsg("Email already registered!");
            return new ResponseEntity<Response>(res, HttpStatus.OK);
        }
    }
}
