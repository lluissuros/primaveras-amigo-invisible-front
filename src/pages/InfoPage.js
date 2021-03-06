import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/core";
import styled from "styled-components";

import {
  Card,
  Logo,
  Form,
  Input,
  Button,
  Error,
  GradientBox
} from "../components/StyledComponents";
import Header from "../components/Header";
import { logout, getDecryptedUser, getUsers } from "../utils/AuthHelperMethods";
import { getConfessions, createConfession } from "../utils/api";

const overrideSpinner = css`
  display: block;
  margin: 90px auto;
  border-color: red;
`;

const TextArea = styled.textarea`
  background: transparent;
  min-height: 190px;
  min-width: 300px;
  font-size: 14px;
  padding: 12px;
  box-sizing: border-box;
`;

const HeaderPlaceholder = styled.div`
  height: 65px;
`;

const info = `
 (IN PROGRESS aqui aniria la info necessaria.)
 
Holi! benvingut a la app nadalenca de primaveras. 
Vindria a ser un homenatge al procés de descentralització comunicativa i desnormalització afectiva que ha anat permeant en el nostre estimat grup.
IMPORTANT: Tots els missatges son anonims, SEMPRE. 
Le caos ha arribat.

 *** FASE1: ESCRIURE CONFESSIONS (fins al 21 desembre)
 Totes i tots han d'escriure un o més comentaris sobre el que pensen i senten. Es recomana sinceritat i elegància i urtugrafìa. 
 Si hi ha alguna cosa que vols dir, ara es un bon moment per posar-se emocional, crítica, reflexiva, per insultar, declarar-se... Treu-t'ho de sobre abans d'acabar l'any!
 Si vols escriure algo lleuger i graciosete, tb està bé. 
 Fins i tot, pots tornar a donar la teva opinió sobre la vaga de taxis o la crema de containers, pero no siguis pallissotes i tira més cap a sanar traumes
 Es recomana MOLT escriure mínim una confessió, no hi ha màxim pero intenteu no ser trolls i rebentar el joc amb parides.

 *** FASE2: REVISAR CONFESSIONS (fins al 24 desembre)
 Les usuaries podran llegir altres confessions (recorda, es sempre anonim!), i puntuar si estan d'acord o no

 *** FASE3: OBRIR LA CAIXA DE PANDORA (a partir del 26 desembre)
 Benvingut le caos!
 Les confessions es podrán veure, segurament en una llista de les més votades a menys. 
 Recorda que totes les confessions son anonimes!! Mai ningú sabrá qui ha escrit que.


 FAQS:
 * Si tot es anònim, perque m'he d'autenticar amb el mail?
    T'has d'autenticar perque durant el procés de revisió (FASE 2), no et toqui revisar els teus propis comentaris.
    Un cop entres a la app, es crea un alias encryptat per a cada confessió que posteges (algo rollo "U2FsdGVkX1+huzT/mYd0ELvcFIejL/G1c/8XOCKWtwU=").
    Ningu pot saber qui es l'autor de res.
    A part, els correus molen, perque així de pas podem fer spam si no ens feu cas.
 
`;

function InfoPage({ history }) {
  return (
    <div
      style={{
        margin: "none",
        textAlign: "left",
        touchAction: "manipulation",
        margin: "24px"
      }}
    >
      <h1
        style={{}}
        onClick={() => {
          history.push("/");
        }}
      >
        🏠 tornar
      </h1>
      <hr />
      <hr />

      <div style={{}}>
        <h2>
          <span class="hiddenSpellError">Holi</span>! Benvingut a l'app
          nadalenca de&nbsp;<span class="hiddenSpellError">primaveras</span>.
        </h2>
        <p>
          <br />
          Podria ser un petit homenatge al proc&eacute;s de
          descentralitzaci&oacute; comunicativa i desnormalitzaci&oacute;
          afectiva que ha anat manifestant en el nostre estimat grup.
          <br />
          <strong>IMPORTANT</strong>: Tots els missatges s&oacute;n
          an&ograve;nims, per&nbsp;<strong>SEMPRE</strong>.<br />
          <br />
          <br />
          <h2>✍️ FASE 1: ESCRIURE CONFESSIONS (fins al 21 desembre)</h2>
        </p>
        <p>
          Totes i tots han d'escriure un o m&eacute;s comentaris sobre el que
          pensen i senten. Es recomana sinceritat, eleg&agrave;ncia i&nbsp;
          <span class="hiddenSpellError">urtugraf&igrave;a</span>. En qualsevol
          idioma.
          <br />
          Si hi ha alguna cosa que vols dir, ara &eacute;s un bon moment per
          posar-se emocional, cr&iacute;tica, reflexiva, per insultar,
          declarar-se... Treu-t'ho de sobre abans d'acabar l'any!
          <br />
          Si vols escriure quelcom lleuger i&nbsp;
          <span class="hiddenSpellError">graciosete</span>,&nbsp;
          <span class="hiddenGrammarError">tb</span>&nbsp;est&agrave; b&eacute;.
          <br />
          Fins i tot, pots tornar a donar la teva opini&oacute; sobre la vaga de
          taxis o la crema de containers, per&ograve; no siguis&nbsp;
          <span class="hiddenSpellError">pallissotes</span>&nbsp;i tira
          m&eacute;s cap a sanar traumes
          <br />
          Es recomana MOLT escriure m&iacute;nim una confessi&oacute;, no hi ha
          m&agrave;xim per&ograve; intenteu no ser&nbsp;
          <span class="hiddenGrammarError">trolls</span>&nbsp;i rebentar el joc
          amb parides.
          <br />
          <br />
          <h2>🤓FASE 2: REVISAR CONFESSIONS (fins al 24 desembre)</h2>
          Les usu&agrave;ries podran llegir altres confessions (recorda,
          &eacute;s sempre an&ograve;nim!), i puntuar si estan d'acord o no
          <br />
          <br />
          <h2>
            🧞FASE 3: OBRIR LA CAIXA DE PANDORA (a partir del 26 desembre)
          </h2>
          Benvingut&nbsp;<span class="hiddenGrammarError">le</span>&nbsp;caos!
          <br />
          Les confessions es podran veure, segurament en una llista de les
          m&eacute;s votades a menys.
          <br />
          Recorda que totes les confessions&nbsp;
          <span class="hiddenGrammarError">son</span>&nbsp;an&ograve;nimes!! Mai
          ning&uacute; sabr&agrave; qui ha escrit que.
        </p>
        <p>
          <br />
          <br />
          <hr />
          <h2 class="hiddenSpellError">PREGUNTES FREQUENTS:</h2>
          <br />❓ Si tot &eacute;s an&ograve;nim,&nbsp;per qu&egrave;&nbsp;m'he
          d'autenticar amb el mail?
          <br />
          🙋T'has d'autenticar perqu&egrave; durant el proc&eacute;s de
          revisi&oacute; (FASE 2), no et toqui revisar els teus propis
          comentaris.
          <br />
          Un cop entres a&nbsp;l'app, es crea un &agrave;lies encriptat per a
          cada confessi&oacute; que&nbsp;
          <span class="hiddenSpellError">posteges</span>&nbsp;(una
          cosa&nbsp;rollo "<span class="hiddenSpellError">U2FsdGVkX1</span>+
          <span class="hiddenSpellError">huzT</span>/
          <span class="hiddenSpellError">mYd0ELvcFIejL</span>/
          <span class="hiddenSpellError">G1c</span>/
          <span class="hiddenSpellError">8XOCKWtwU</span>=").
          <br />
          Ning&uacute; pot saber qui &eacute;s l'autor de res.
          <br />A part, els correus molen, perqu&egrave; aix&iacute; de pas
          podem fer&nbsp;<span class="hiddenGrammarError">spam</span>
          <br />
          <br />
          ❓ Puc dir barbaritats?
          <br />
          🙋 Pots dir el que vulguis. Pensa que la gent té sentiments, però
          també podem utilitzar això per apendre coses.
          <br />
          <br />
          ❓ Que passa si no vull participar?
          <br />
          🙋 No passa res. PERO possiblement rebras mails automatics d'spam. La
          millor manera dácabar aixo es dedicar 10 segons a penjar un post, pero
          si realment no vols envia un mail i tésborrem de la base de dades, no
          questions asked.
        </p>
      </div>
      {/* <div style={{ whiteSpace: "pre-wrap", margin: "24px" }}>{info}</div> */}
    </div>
  );
}

export default InfoPage;
