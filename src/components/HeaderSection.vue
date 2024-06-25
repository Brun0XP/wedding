<template>
  <header class="header">
    <div class="bg-image"></div>
    <div class="wrapper">
      <div class="content">
        <div class="logo">
          <span class="first-letter">A</span>
          <span class="second-letter">B</span>
        </div>
        <div class="title">Ana Carolina <br />& Bruno</div>
        <div class="save-the-date">Save the date</div>
        <div class="web-info">
          <i class="pi pi-calendar"></i>
          21 de dezembro de 2024
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
interface Props {
  variant?: 'primary' | 'secondary';
  title?: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.header {
  background-color: #fffafa;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 634px;
  width: 100%;
  .bg-image {
    width: 100%;
    min-height: 380px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/imgs/photo_2.jpg');
  }
  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    z-index: 1;
    .content {
      position: relative;
      width: 90%;
      max-width: 480px;
      padding: 62px 46px;
      margin: 56px 8px 56px 0;
      color: #5d758d;
      background-color: #fff;
      &::before {
        background-color: #ffc3c9;
        content: '';
        position: absolute;
        top: 8px;
        right: auto;
        bottom: auto;
        left: 8px;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
      &:after {
        background-image: url('/imgs/floral-topo-rose.svg');
        content: '';
        position: absolute;
        width: 180px;
        height: 180px;
        top: 0px;
        right: 0;
        bottom: auto;
        left: auto;
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 100%;
      }

      .logo {
        background-image: url('/imgs/logo-topo-rose.svg');
        position: relative;
        width: 57px;
        height: 57px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        span {
          color: #e4afaf;
          position: absolute;
          top: 25%;
          left: 0;
          bottom: auto;
          right: auto;
          display: block;
          width: 65%;
          font-weight: bold;
          font-size: 16px;
          line-height: 12px;
          text-align: center;
          text-transform: uppercase;
          &.second-letter {
            top: auto;
            left: auto;
            bottom: 25%;
            right: 0;
          }
        }
      }
      .title {
        margin: 16px 0;
        font-size: 37px;
        font-weight: bold;
        line-height: 43px;
        letter-spacing: -0.04em;
      }
      .save-the-date {
        margin: 0 0 16px;
        font-size: 18px;
        font-weight: bold;
        line-height: 26px;
      }
      .web-info {
        i {
          color: #ffc3c9;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .header {
    padding: 100px 0;
    justify-content: start;
    .bg-image {
      position: absolute;
      top: 0;
      right: auto;
      bottom: 0;
      left: 0;
      width: 66%;
    }
    .wrapper {
      justify-content: end;
      .content {
        margin: 0 9px 0 0;
        &:after {
          width: 255px;
          height: 349px;
          top: -100px;
          background-position: top center;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .header {
    .wrapper {
      .content {
        margin-right: 100px;
      }
    }
  }
}
</style>
