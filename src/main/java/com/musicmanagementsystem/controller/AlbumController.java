package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.service.DTO.AlbumDTO;
import com.musicmanagementsystem.service.interfaces.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/albums")
@CrossOrigin
public class AlbumController {
    @Autowired
    public AlbumService albumService;

//    @Autowired
//    public Discography_MainService discography_mainService;


    @GetMapping("/all")
    public List<AlbumDTO> getAllAlbums() {
        return albumService.getAllAlbums();
    }
}
