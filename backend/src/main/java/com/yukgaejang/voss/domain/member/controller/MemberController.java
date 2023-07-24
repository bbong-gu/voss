package com.yukgaejang.voss.domain.member.controller;

import com.yukgaejang.voss.domain.member.repository.RefreshTokenRepository;
import com.yukgaejang.voss.domain.member.repository.entity.RefreshToken;
import com.yukgaejang.voss.domain.member.service.MemberService;
import com.yukgaejang.voss.domain.member.service.dto.request.JoinRequest;
import com.yukgaejang.voss.domain.member.service.dto.request.LoginRequest;
import com.yukgaejang.voss.domain.member.service.dto.response.JoinResponse;
import com.yukgaejang.voss.domain.member.service.dto.response.LoginResponse;
import com.yukgaejang.voss.global.jwt.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {
    private final MemberService memberService;

    private final JwtService jwtService;
    private final RefreshTokenRepository refreshTokenRepository;

    @PostMapping
    public ResponseEntity<JoinResponse> join(@RequestBody JoinRequest joinRequest) {
        memberService.join(joinRequest);
        return ResponseEntity.ok(new JoinResponse(true));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        memberService.login(loginRequest);
        String accessToken = jwtService.createAccessToken(loginRequest.getEmail());
        String refreshToken = jwtService.createRefreshToken();
        refreshTokenRepository.save(new RefreshToken(refreshToken, loginRequest.getEmail()));
        return ResponseEntity.ok(new LoginResponse(accessToken, refreshToken));
    }
}